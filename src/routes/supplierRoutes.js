// src/routes/supplierRoutes.js
const express = require('express');
const {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../controllers/supplierController');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Expeditions
 *   description: API for managing suppliers
 */
/**
 * @swagger
 * /api/suppliers:
 *   get:
 *     summary: Fetch all suppliers
 *     description: Retrieves a list of all suppliers
 *     responses:
 *       200:
 *         description: A list of suppliers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 */
router.get('/', getSuppliers);

/**
 * @swagger
 * /api/suppliers:
 *   post:
 *     summary: Add a new supplier
 *     description: Creates a new supplier with the provided details
 *     requestBody:
 *       description: Supplier object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       201:
 *         description: Supplier successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       400:
 *         description: Invalid data provided
 */
router.post('/', addSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   put:
 *     summary: Update an existing supplier
 *     description: Updates the details of an existing supplier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the supplier to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Supplier object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Supplier successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       404:
 *         description: Supplier not found
 *       400:
 *         description: Invalid data provided
 */
router.put('/:id', updateSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   delete:
 *     summary: Delete a supplier
 *     description: Deletes the supplier with the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the supplier to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier successfully deleted
 *       404:
 *         description: Supplier not found
 */
router.delete('/:id', deleteSupplier);

module.exports = router;
