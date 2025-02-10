const Expedition = require('../models/Expedition');

// Get all expeditions
exports.getAllExpeditions = async (req, res) => {
    try {
        const expeditions = await Expedition.find();
        res.json(expeditions);
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch expeditions', error });
      }
};

// Get a single expedition by ID
exports.getExpeditionById = async (req, res) => {
  try {
    const expedition = await Expedition.findById(req.params.id);
    if (!expedition) {
      return res.status(404).json({ message: 'Expedition not found' });
    }
    res.json(expedition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new expedition
exports.createExpedition = async (req, res) => {
  try {
    const { _id, nom, frais } = req.body;

    const newExpedition = new Expedition({ _id, nom, frais });
    await newExpedition.save();

    res.status(201).json(newExpedition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an expedition by ID
exports.updateExpedition = async (req, res) => {
  try {
    const updatedExpedition = await Expedition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedExpedition) {
      return res.status(404).json({ message: 'Expedition not found' });
    }

    res.json(updatedExpedition);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an expedition by ID
exports.deleteExpedition = async (req, res) => {
  try {
    const deletedExpedition = await Expedition.findByIdAndDelete(req.params.id);

    if (!deletedExpedition) {
      return res.status(404).json({ message: 'Expedition not found' });
    }

    res.json({ message: 'Expedition deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
