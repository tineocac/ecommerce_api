const { Router } = require("express");
const router = Router();
const { getAllProducts, createNewProduct } = require("../controllers");
const { authMiddleware } = require("../middlewares/");

router.get("/products", authMiddleware, getAllProducts);

router.post("/products", createNewProduct);

module.exports = router;
