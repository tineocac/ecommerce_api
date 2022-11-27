const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
  getAllProducts,
  createNewProduct,
  addProductInCart,
} = require("./products.controllers");

module.exports = {
  createUser,
  userLogin,
  getAllProducts,
  createNewProduct,
  addProductInCart,
};
