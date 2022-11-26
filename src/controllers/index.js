const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");

module.exports = {
  createUser,
  userLogin,
};
