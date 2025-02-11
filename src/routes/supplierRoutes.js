const express = require('express');
const {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplierById
} = require('../controllers/supplierController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: API for managing suppliers
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       required:
 *         - name
 *         - contact
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the supplier
 *         name:
 *           type: string
 *           description: Name of the supplier
 *         contact:
 *           type: string
 *           description: Contact information of the supplier
 *         address:
 *           type: string
 *           description: Address of the supplier
 */

/**
 * @swagger
 * /api/suppliers:
 *   get:
 *     summary: Fetch all suppliers
 *     tags: [Suppliers]
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
 *     tags: [Suppliers]
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
 *     tags: [Suppliers]
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
 *     tags: [Suppliers]
 *     description: Deletes the supplier with the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the supplier to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Supplier successfully deleted
 *       404:
 *         description: Supplier not found
 */
router.delete('/:id', deleteSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   get:
 *     summary: Get an supplier by ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the supplier
 *         schema:
 *           type: string  # 🔹 Changed to string for MongoDB compatibility
 *     responses:
 *       200:
 *         description: Supplier data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       404:
 *         description: Supplier not found
 */
router.get('/:id', getSupplierById);

module.exports = router;
