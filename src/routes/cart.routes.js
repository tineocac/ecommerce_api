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
 * /api/v1/products/{userId}/addProduct:
 *   post:
 *     summary: Add product in cart
 *     tags: [Cart]
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
 *                     {}
 *
 */

router.post("/products/:userId/addProduct", authMiddleware, addProductsInCart);

router.get("/:cartId/showProducts", authMiddleware, showProductsInCart);

router.put("/:cartId/makePurchase", authMiddleware, makePurchase);

module.exports = router;
