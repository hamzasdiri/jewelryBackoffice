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
 *         description: The ID of the supplier order to be retrieved
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier order found
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
 *     summary: Add a new supplier order
 *     description: Creates a new supplier order with the provided details
 *     requestBody:
 *       description: Supplier order object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierOrder'
 *     responses:
 *       201:
 *         description: Supplier order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SupplierOrder'
 */
router.post('/', addSupplierOrder);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   patch:
 *     summary: Update an existing supplier order
 *     description: Updates a supplier order with the given ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier order to be updated
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Supplier order object with updated fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierOrder'
 *     responses:
 *       200:
 *         description: Supplier order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SupplierOrder'
 *       404:
 *         description: Supplier order not found
 */
router.patch('/:id', updateSupplierOrder);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   delete:
 *     summary: Delete a supplier order
 *     description: Removes a supplier order from the system
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier order to be deleted
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
