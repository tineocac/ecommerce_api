const errorHandling = require("./errorHandling.middleware");
const authMiddleware = require("./auth.middleware");

module.exports = { errorHandling, authMiddleware };
