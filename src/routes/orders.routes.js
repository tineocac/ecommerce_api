const { Router } = require("express");
const router = Router();
const {
  createNewOrder,
  addProductsInOrder,
  makeOrder,
  getAllOrders,
} = require("../controllers");

router.post("/orders/:userId", createNewOrder);

router.post("/orders/:orderId/products", addProductsInOrder);

router.put("/orders/:id/makeOrder", makeOrder);

router.get("/orders/:userId", getAllOrders);

module.exports = router;
