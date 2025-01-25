// src/controllers/clientController.js
const Client = require('../models/client');

// Fetch all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch clients', error });
  }
};

// Add a new client
const addClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add client', error });
  }
};

// Update a client
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update client', error });
  }
};

// Delete a client
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete client', error });
  }
};

module.exports = {
  getClients,
  addClient,
  updateClient,
  deleteClient,
};
