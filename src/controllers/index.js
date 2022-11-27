const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { getAllProducts } = require("./products.controllers");

module.exports = {
  createUser,
  userLogin,
  getAllProducts,
};
