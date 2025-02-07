// src/routes/supplierOrderRoutes.js
const express = require('express');
const {
  getSupplierOrders,
  getSupplierOrderById,
  addSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOrder,
} = require('../controllers/supplierOrderController');

const router = express.Router();

/**
 * @swagger
 * /api/supplier-orders:
 *   get:
 *     summary: Fetch all supplier orders
 *     description: Retrieves a list of all supplier orders
 *     responses:
 *       200:
 *         description: A list of supplier orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SupplierOrder'
 */
router.get('/', getSupplierOrders);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   get:
 *     summary: Get a specific supplier order by ID
 *     description: Retrieves a supplier order by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier order to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SupplierOrder'
 *       404:
 *         description: Supplier order not found
 */
router.get('/:id', getSupplierOrderById);

/**
 * @swagger
 * /api/supplier-orders:
 *   post:
 *     summary: Create a new supplier order
 *     description: Adds a new supplier order to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierOrder'
 *     responses:
 *       201:
 *         description: Supplier order created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', addSupplierOrder);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   put:
 *     summary: Update an existing supplier order
 *     description: Updates an existing supplier order by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier order to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierOrder'
 *     responses:
 *       200:
 *         description: Supplier order updated successfully
 *       404:
 *         description: Supplier order not found
 */
router.put('/:id', updateSupplierOrder);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   delete:
 *     summary: Delete a specific supplier order
 *     description: Deletes a supplier order by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier order to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier order deleted successfully
 *       404:
 *         description: Supplier order not found
 */
router.delete('/:id', deleteSupplierOrder);

module.exports = router;
