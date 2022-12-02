const { Router } = require("express");
const router = Router();
const {
  addProductsInCart,
  showProductsInCart,
  makePurchase,
} = require("../controllers");
const { authMiddleware } = require("../middlewares");

/**
 * @openapi
 * /api/v1/cart/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add product in cart
 *     tags: [Cart]
 *     requestBody:
 *       description: To add products in cart you need a productId and quantity.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addProducts"
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: userId
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
 *                     $ref: "#/components/schemas/addProductsResponse"
 *   
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: To show all products in cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema: 
 *           type: integer
 *           minimun: 1
 *         decription: userId
 * 
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
 *                     $ref: "#/components/schemas/showProductsInCart"
 *                   
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: To make purchase
 *     tags: [Cart]
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
 *                     $ref: "#/components/schemas/makePurchase"
 *                   
 */

router.post("/cart/:userId", authMiddleware, addProductsInCart);

router.get("/cart/:userId", authMiddleware, showProductsInCart);

router.put("/cart/:userId", authMiddleware, makePurchase);

module.exports = router;
