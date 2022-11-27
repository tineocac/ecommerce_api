const { Router } = require("express");
const router = Router();
const {
  getAllProducts,
  createNewProduct,
  addProductInCart,
} = require("../controllers");
const { authMiddleware } = require("../middlewares/");

router.get("/products", authMiddleware, getAllProducts);

router.post("/products", authMiddleware, createNewProduct);
router.post("/add/product", authMiddleware, addProductInCart);

module.exports = router;
