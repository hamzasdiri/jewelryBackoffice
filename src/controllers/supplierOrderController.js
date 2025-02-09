const SupplierOrder = require('../models/SupplierOrder');
const Supplier = require('../models/Supplier'); // Assuming you have a Supplier model
const Article = require('../models/Article'); // Assuming you have an Article model

// Get all supplier orders
const getSupplierOrders = async (req, res) => {
  try {
    const orders = await SupplierOrder.find().populate('fournisseur').populate('articles.article');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch supplier orders', error });
  }
};

// Get a single supplier order by ID
const getSupplierOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await SupplierOrder.findById(id).populate('fournisseur').populate('articles.article');

    if (!order) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch supplier order', error });
  }
};

// Create a new supplier order
const mongoose = require('mongoose');
const Supplier = require('../models/Supplier');
const SupplierOrder = require('../models/SupplierOrder');
const Article = require('../models/Article');

const createSupplierOrder = async (req, res) => {
  try {
    const {
      codeCommande,
      dateCommande,
      fournisseur,
      articles,
      etatCommande,
      total
    } = req.body;

    let fournisseurId;

    // 1️⃣ Validate Supplier (Create if Needed)
    if (!fournisseur) {
      return res.status(400).json({ message: 'Supplier is required' });
    }

    if (mongoose.isValidObjectId(fournisseur)) {
      // If supplier is an ID string, use it directly
      fournisseurId = fournisseur;
    } else if (typeof fournisseur === 'object' && !fournisseur._id) {
      // If supplier is an object without an ID, create a new one
      const newSupplier = new Supplier({
        nom: fournisseur.nom,
        adresse: fournisseur.adresse,
        contact: fournisseur.contact
      });
      const savedSupplier = await newSupplier.save();
      fournisseurId = savedSupplier._id;
    } else {
      return res.status(400).json({ message: 'Invalid supplier format' });
    }

    // 2️⃣ Validate and Update Stock for Articles
    if (!articles || !Array.isArray(articles) || articles.length === 0) {
      return res.status(400).json({ message: 'Articles are required' });
    }

    const validatedArticles = await Promise.all(
      articles.map(async (item) => {
        const article = await Article.findById(item.article);
        if (!article) {
          throw new Error(`Article not found: ${item.article}`);
        }

        // Increase stock when a supplier order is placed
        article.quantity += item.quantity;
        await article.save();

        return item;
      })
    );

    // 3️⃣ Create the Supplier Order
    const newOrder = new SupplierOrder({
      codeCommande,
      dateCommande,
      fournisseur: fournisseurId,
      articles: validatedArticles,
      etatCommande,
      total
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: 'Supplier order created successfully',
      order: savedOrder
    });

  } catch (error) {
    res.status(400).json({ message: 'Failed to create supplier order', error: error.message });
  }
};

module.exports = { createSupplierOrder };

// Update a supplier order
const updateSupplierOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fournisseur,
      articles
    } = req.body;

    let fournisseurId;

    // If fournisseur is provided but has no ID, create it
    if (fournisseur && !fournisseur._id) {
      const newSupplier = new Supplier({
        nom: fournisseur.nom,
        adresse: fournisseur.adresse,
        contact: fournisseur.contact
      });
      const savedSupplier = await newSupplier.save();
      fournisseurId = savedSupplier._id;
    } else {
      fournisseurId = fournisseur ? fournisseur._id : undefined;
    }

    // Validate and update stock for articles if provided
    let validatedArticles;
    if (articles) {
      validatedArticles = await Promise.all(
        articles.map(async (item) => {
          const article = await Article.findById(item.article);
          if (!article) {
            throw new Error(`Article not found: ${item.article}`);
          }
          return item;
        })
      );
    }

    const updatedOrder = await SupplierOrder.findByIdAndUpdate(
      id,
      {
        ...req.body,
        fournisseur: fournisseurId || req.body.fournisseur,
        articles: validatedArticles || req.body.articles
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update supplier order', error: error.message });
  }
};

// Delete a supplier order
const deleteSupplierOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await SupplierOrder.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }

    // Revert stock changes when an order is deleted
    await Promise.all(
      deletedOrder.articles.map(async (item) => {
        const article = await Article.findById(item.article);
        if (article) {
          article.quantity -= item.quantity; // Reduce stock
          await article.save();
        }
      })
    );

    res.json({ message: 'Supplier order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete supplier order', error });
  }
};

module.exports = {
  getSupplierOrders,
  getSupplierOrderById,
  createSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOrder,
};
