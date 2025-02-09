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

    // Update article quantity when a new order is placed
    const article = await Article.findOne({ codeArticle: newOrder.codeArticle });

    if (!article) {
      return res.status(404).json({ message: `Article with code ${newOrder.codeArticle} not found` });
    }

    article.quantity += newOrder.quantite; // Increase stock
    await article.save();

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add supplier order', error });
  }
};

// Update an existing supplier order
const updateSupplierOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await SupplierOrder.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }

    // Handle article quantity updates
    const article = await Article.findOne({ codeArticle: updatedOrder.codeArticle });

    if (!article) {
      return res.status(404).json({ message: `Article with code ${updatedOrder.codeArticle} not found` });
    }

    article.quantity += updatedOrder.quantite; // Adjust stock
    await article.save();

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

    // Revert stock changes when an order is deleted
    const article = await Article.findOne({ codeArticle: deletedOrder.codeArticle });

    if (article) {
      article.quantity -= deletedOrder.quantite; // Reduce stock
      await article.save();
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
