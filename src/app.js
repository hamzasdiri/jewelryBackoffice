const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Routes
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

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // No need to redefine it here

// Serve Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/supplier-orders', supplierOrderRoutes);
app.use('/api/client-orders', clientOrderRoutes);
app.use('/api/client-invoice', clientInvoiceRoutes);
app.use('/api/articles', articleRoutes);

module.exports = app;
