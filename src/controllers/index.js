const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { getAllProducts, createNewProduct } = require("./products.controllers");
const { addProductsInCart, showProductsInCart } = require("./cart.controllers");

module.exports = {
  createUser,
  userLogin,
  getAllProducts,
  createNewProduct,
  addProductsInCart,
  showProductsInCart
};
