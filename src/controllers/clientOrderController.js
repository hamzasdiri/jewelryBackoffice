// Create a new client order
const mongoose = require('mongoose');
const ClientOrder = require('../models/ClientOrder');
const Client = require('../models/Client');
const Expedition = require('../models/Expedition'); 
const Article = require('../models/Article'); 

// Get all client orders
const getClientOrders = async (req, res) => {
  try {
    const orders = await ClientOrder.find()
      .populate({ path: 'client', match: {} }) // If no match, will return null
      .populate({ path: 'expedition', match: {} }) // If invalid, will return null
      .populate({ path: 'articles.article', match: {} }); // If invalid article, will return null

    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: 'Failed to fetch client orders', error });
  }
};

// Get a single client order by ID
const getClientOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ClientOrder.findById(id).populate('client').populate('expedition').populate('articles.article');

    if (!order) {
      return res.status(404).json({ message: 'Client order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch client order', error });
  }
};



const createClientOrder = async (req, res) => {
  try {
    const {
      codeCommande,
      dateCommande,
      client,
      expedition,
      noteLivraison,
      modePaiment,
      codeSuivi,
      articles,
      etatCommande,
      freeShipping,
      total
    } = req.body;

    // 1️⃣ Check if the client exists
    const existingClient = await Client.findById(client);
    if (!existingClient) {
      return res.status(404).json({ message: 'Client not found' });
    }

    let expeditionId;

    // 2️⃣ Handle Expedition (Create if Needed)
    if (!expedition) {
      return res.status(400).json({ message: 'Expedition is required' });
    }

    if (mongoose.isValidObjectId(expedition)) {
      // If expedition is an ID string, use it directly
      expeditionId = expedition;
    } else if (typeof expedition === 'object' && !expedition._id) {
      // If expedition is an object without an ID, create a new one
      const newExpedition = new Expedition({
        nom: expedition.nom,
        frais: expedition.frais
      });
      const savedExpedition = await newExpedition.save();
      expeditionId = savedExpedition._id;
    } else {
      return res.status(400).json({ message: 'Invalid expedition format' });
    }

    // 3️⃣ Validate Articles
    const validatedArticles = await Promise.all(
      articles.map(async (item) => {
        const articleExists = await Article.findById(item.article);
        if (!articleExists) {
          throw new Error(`Article not found: ${item.article}`);
        }
        return item;
      })
    );

    // 4️⃣ Create the Client Order
    const newOrder = new ClientOrder({
      codeCommande,
      dateCommande,
      client,
      expedition: expeditionId,
      noteLivraison,
      modePaiment,
      codeSuivi,
      articles: validatedArticles,
      etatCommande,
      freeShipping,
      total
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: 'Order created successfully',
      order: savedOrder
    });

  } catch (error) {
    res.status(400).json({ message: 'Failed to create order', error: error.message });
  }
};


// Update a client order
const updateClientOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      expedition,
      articles
    } = req.body;

    let expeditionId;

    // If expedition is provided but has no ID, create it
    if (expedition && !expedition._id) {
      const newExpedition = new Expedition({
        nom: expedition.nom,
        frais: expedition.frais
      });
      const savedExpedition = await newExpedition.save();
      expeditionId = savedExpedition._id;
    } else {
      expeditionId = expedition ? expedition._id : undefined;
    }

    // Validate articles if provided
    let validatedArticles;
    if (articles) {
      validatedArticles = await Promise.all(
        articles.map(async (item) => {
          const articleExists = await Article.findById(item.article);
          if (!articleExists) {
            throw new Error(`Article not found: ${item.article}`);
          }
          return item;
        })
      );
    }

    const updatedOrder = await ClientOrder.findByIdAndUpdate(
      id,
      {
        ...req.body,
        expedition: expeditionId || req.body.expedition,
        articles: validatedArticles || req.body.articles
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Client order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update client order', error: error.message });
  }
};

// Delete a client order
const deleteClientOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await ClientOrder.findByIdAndDelete(id);

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
  createClientOrder,
  updateClientOrder,
  deleteClientOrder
};
