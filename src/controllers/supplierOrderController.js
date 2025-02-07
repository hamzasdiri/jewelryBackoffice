const SupplierOrder = require('../models/SupplierOrder');
const Article = require('../models/Article'); // Assuming you have an Article model

// Get all supplier orders
const getSupplierOrders = async (req, res) => {
  try {
    const orders = await SupplierOrder.find().populate('fournisseur');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch supplier orders', error });
  }
};

// Get a single supplier order by ID
const getSupplierOrderById = async (req, res) => {
  try {
    const order = await SupplierOrder.findById(req.params.id).populate('fournisseur');
    if (!order) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch supplier order', error });
  }
};

// Add a new supplier order
const addSupplierOrder = async (req, res) => {
  try {
    const newOrder = new SupplierOrder(req.body);

    // Update article quantities (increase) when a new order is placed
    for (const item of newOrder.articles || []) {
      const article = await Article.findById(item.article);
      if (!article) {
        return res.status(404).json({ message: `Article with ID ${item.article} not found` });
      }
      article.quantity += item.quantity; // Increase quantity by the ordered amount
      await article.save();
    }

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add supplier order', error });
  }
};

// Update an existing supplier order
const updateSupplierOrder = async (req, res) => {
  try {
    const updatedOrder = await SupplierOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }

    // Handle article quantity updates (increase or decrease based on changes)
    for (const item of req.body.articles || []) {
      const article = await Article.findById(item.article);
      if (!article) {
        return res.status(404).json({ message: `Article with ID ${item.article} not found` });
      }

      // If quantity has increased, add the quantity
      if (item.quantity > 0) {
        article.quantity += item.quantity;
      } else if (item.quantity < 0) {
        article.quantity += item.quantity; // Decrease quantity
      }
      await article.save();
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update supplier order', error });
  }
};

// Delete a supplier order
const deleteSupplierOrder = async (req, res) => {
  try {
    const deletedOrder = await SupplierOrder.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }

    // Optional: Update article quantities when an order is deleted
    for (const item of deletedOrder.articles || []) {
      const article = await Article.findById(item.article);
      if (article) {
        article.quantity -= item.quantity; // Revert quantity increase
        await article.save();
      }
    }

    res.json({ message: 'Supplier order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete supplier order', error });
  }
};

module.exports = {
  getSupplierOrders,
  getSupplierOrderById,
  addSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOrder,
};
