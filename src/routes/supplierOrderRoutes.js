const express = require('express');
const {
  getSupplierOrders,
  getSupplierOrderById,
  createSupplierOrder,
  updateSupplierOrder,
  deleteSupplierOrder,
} = require('../controllers/supplierOrderController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SupplierOrders
 *   description: API for managing supplier orders
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SupplierOrder:
 *       type: object
 *       required:
 *         - codeCommande
 *         - dateCommande
 *         - fournisseur
 *         - expedition
 *         - modePaiment
 *         - codeSuivi
 *         - codeArticle
 *         - quantite
 *         - prix
 *         - total
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the supplier order
 *         codeCommande:
 *           type: string
 *           description: Unique order code
 *         dateCommande:
 *           type: string
 *           format: date
 *           description: Date of the order
 *         fournisseur:
 *           type: string
 *           description: Reference to the supplier ID
 *         expedition:
 *           type: string
 *           description: Reference to the expedition ID
 *         noteLivraison:
 *           type: string
 *           description: Delivery note
 *         modePaiment:
 *           type: string
 *           description: Payment method
 *         codeSuivi:
 *           type: string
 *           description: Tracking code
 *         codeArticle:
 *           type: string
 *           description: Article code
 *         quantite:
 *           type: integer
 *           description: Quantity of the article in the order
 *         prix:
 *           type: number
 *           format: float
 *           description: Price per unit
 *         total:
 *           type: number
 *           format: float
 *           description: Total price of the order
 *         note:
 *           type: string
 *           description: Additional notes
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was last updated
 */

/**
 * @swagger
 * /api/supplier-orders:
 *   get:
 *     summary: Fetch all supplier orders
 *     tags: [SupplierOrders]
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
 *     tags: [SupplierOrders]
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
 *     tags: [SupplierOrders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SupplierOrder'
 *     responses:
 *       201:
 *         description: Supplier order successfully created
 *       400:
 *         description: Invalid data provided
 */
router.post('/', createSupplierOrder);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   put:
 *     summary: Update an existing supplier order
 *     tags: [SupplierOrders]
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
 *         description: Supplier order successfully updated
 *       404:
 *         description: Supplier order not found
 *       400:
 *         description: Invalid data provided
 */
router.put('/:id', updateSupplierOrder);

/**
 * @swagger
 * /api/supplier-orders/{id}:
 *   delete:
 *     summary: Delete a supplier order
 *     tags: [SupplierOrders]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the supplier order to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Supplier order successfully deleted
 *       404:
 *         description: Supplier order not found
 */
router.delete('/:id', deleteSupplierOrder);

module.exports = router;
