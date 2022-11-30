const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { getAllProducts, createNewProduct } = require("./products.controllers");
const {
  addProductsInCart,
  showProductsInCart,
  makePurchase,
} = require("./cart.controllers");
const {
  createNewOrder,
  addProductsInOrder,
  makeOrder,
  getAllOrders,
} = require("./orders.controllers");

module.exports = {
  createUser,
  userLogin,
  getAllProducts,
  createNewProduct,
  addProductsInCart,
  showProductsInCart,
  makePurchase,
  createNewOrder,
  addProductsInOrder,
  makeOrder,
  getAllOrders
};
