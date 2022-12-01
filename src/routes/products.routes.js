const { Router } = require("express");
const router = Router();
const { getAllProducts, createNewProduct } = require("../controllers");
const { authMiddleware } = require("../middlewares/");

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                status:
 *                  type: string
 *                  example: OK
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: "#/components/schemas/Products"
 *                      
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: To create a new product you need an name, price, availableQty, userId(your id) and finally an image( isn't obligatory).
 *       required: true
 *       content: 
 *         application/json:
 *          schema:
 *            $ref: "#/components/schemas/CreateProducts" 
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
 *                     $ref: "#/components/schemas/CreateProductResponse"
 *
 *
 *
 */

router.get("/products", authMiddleware, getAllProducts);

router.post("/products", authMiddleware, createNewProduct);

module.exports = router;
