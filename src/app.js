// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const clientRoutes = require('./routes/clientRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const supplierOrderRoutes = require('./routes/supplierOrderRoutes');
const clientOrderRoutes = require('./routes/clientOrderRoutes');
const clientInvoiceRoutes = require('./routes/clientInvoiceRoutes');
const articleRoutes = require('./routes/articleRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/supplier', supplierRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/supplier-orders', supplierOrderRoutes);
app.use('/api/client-orders', clientOrderRoutes);
app.use('/api/client-invoice', clientInvoiceRoutes);
app.use('/api/articles', articleRoutes);
module.exports = app;
