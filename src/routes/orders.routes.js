const { Router } = require("express");
const router = Router();
const { createNewOrder, addProductsInOrder } = require("../controllers");

router.post("/orders/:userId", createNewOrder);

router.post("/orders/:orderId/products", addProductsInOrder);

module.exports = router;
