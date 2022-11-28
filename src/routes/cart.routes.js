const { Router } = require("express");
const router = Router();
const { addProductsInCart } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post("/products/:cartId/addProduct", authMiddleware, addProductsInCart);

module.exports = router;
