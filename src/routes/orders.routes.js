const { Router } = require("express");
const router = Router();
const {
  createNewOrder,
  addProductsInOrder,
  makeOrder,
  getAllOrders,
} = require("../controllers");
const { authMiddleware } = require("../middlewares");

router.post("/orders/:userId", authMiddleware, createNewOrder);

router.post("/orders/:orderId/products", authMiddleware, addProductsInOrder);

router.put("/orders/:id/makeOrder", authMiddleware, makeOrder);

router.get("/orders/:userId", authMiddleware, getAllOrders);

module.exports = router;
