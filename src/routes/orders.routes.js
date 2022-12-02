const { Router } = require("express");
const router = Router();
const {
  createNewOrder,
  addProductsInOrder,
  makeOrder,
  getAllOrders,
} = require("../controllers");
const { authMiddleware } = require("../middlewares");

/**
 * @openapi
 * /api/v1/orders/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: To create a new order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: userId
 * 
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data: 
 *                   type: array
 *                   items: 
 *                     $ref: "#/components/schemas/CreateOrdersResponse"
 * 
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: To get all orders from a user
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: userId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/GetOrders"
 * 
 * 
 * /api/v1/orders/{orderId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: To add products in order
 *     requestBody:
 *       description: To add products in an order you need the productId and a quantity
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/AddProductsInOrder"
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: orderId
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/AddProductsResponse"
 * 
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: To make order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema: 
 *           type: integer
 *           minimun: 1
 *         description: orderId
 *     responses:
 *       200: 
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: 
 *                     $ref: "#/components/schemas/CompleteOrder"
 */

router.post("/orders/:userId", authMiddleware, createNewOrder);

router.get("/orders/:userId", authMiddleware, getAllOrders);

router.post("/orders/:orderId", authMiddleware, addProductsInOrder);

router.put("/orders/:orderId", authMiddleware, makeOrder);


module.exports = router;
