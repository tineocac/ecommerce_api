const { Router } = require("express");
const router = Router();
const {
  addProductsInCart,
  showProductsInCart,
  makePurchase,
} = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post("/products/:cartId/addProduct", authMiddleware, addProductsInCart);

router.get("/:cartId/showProducts", authMiddleware, showProductsInCart);

router.put("/:cartId/makePurchase", authMiddleware, makePurchase);

module.exports = router;
