// src/controllers/supplierOrderController.js
const SupplierOrder = require('../models/SupplierOrder');

// Get all supplier orders
const getSupplierOrders = async (req, res) => {
  try {
    const orders = await SupplierOrder.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch supplier orders', error });
  }
};

// Get a single supplier order by ID
const getSupplierOrderById = async (req, res) => {
  try {
    const order = await SupplierOrder.findById(req.params.id);
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
