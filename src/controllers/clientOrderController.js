// src/controllers/clientOrderController.js
const ClientOrder = require('../models/ClientOrder');

// Get all client orders
const getClientOrders = async (req, res) => {
  try {
    const orders = await ClientOrder.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch client orders', error });
  }
};

// Get a single client order by ID
const getClientOrderById = async (req, res) => {
  try {
    const order = await ClientOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Client order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch client order', error });
  }
};

// Add a new client order
const addClientOrder = async (req, res) => {
  try {
    const newOrder = new ClientOrder(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add client order', error });
  }
};

// Update an existing client order
const updateClientOrder = async (req, res) => {
  try {
    const updatedOrder = await ClientOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Client order not found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update client order', error });
  }
};

// Delete a client order
const deleteClientOrder = async (req, res) => {
  try {
    const deletedOrder = await ClientOrder.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Client order not found' });
    }
    res.json({ message: 'Client order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete client order', error });
  }
};

module.exports = {
  getClientOrders,
  getClientOrderById,
  addClientOrder,
  updateClientOrder,
  deleteClientOrder,
};
