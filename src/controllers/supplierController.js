// src/controllers/supplierController.js
const Supplier = require('../models/Supplier');

// Fetch all suppliers
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch suppliers', error });
  }
};

// Add a new supplier
const addSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).json(supplier);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add supplier', error });
  }
};

// Update a supplier
const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSupplier = await Supplier.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSupplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.json(updatedSupplier);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update supplier', error });
  }
};

// Delete a supplier
const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSupplier = await Supplier.findByIdAndDelete(id);
    if (!deletedSupplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    res.json({ message: 'Supplier deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete supplier', error });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    res.json(supplier);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch supplier', error });
  }
};

module.exports = {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplierById,
};
