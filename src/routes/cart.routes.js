const { Router } = require("express");
const router = Router();
const { addProductsInCart, showProductsInCart } = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post("/products/:cartId/addProduct", authMiddleware, addProductsInCart);

router.get("/:cartId/showProducts", showProductsInCart);

module.exports = router;
