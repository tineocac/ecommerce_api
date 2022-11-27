const { Router } = require("express");
const router = Router();
const { getAllProducts } = require("../controllers");
const { authMiddleware } = require("../middlewares/");

router.get("/products", authMiddleware, getAllProducts);

module.exports = router;
