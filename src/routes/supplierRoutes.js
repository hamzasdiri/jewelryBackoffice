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
 *         description: Supplier created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 */
router.post('/', addSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   put:
 *     summary: Update an existing supplier
 *     description: Updates a supplier with the given ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier to be updated
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Supplier object with updated fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Supplier updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       404:
 *         description: Supplier not found
 */
router.put('/:id', updateSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   delete:
 *     summary: Delete a supplier
 *     description: Removes a supplier from the system
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier to be deleted
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier deleted successfully
 *       404:
 *         description: Supplier not found
 */
router.delete('/:id', deleteSupplier);

module.exports = router;
