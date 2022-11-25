const db = require("./utils/database");
const express = require("express");
const app = express();

db.authenticate()
  .then(() => console.log("Succeful aunthentication"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("Succesful synchronization"))
  .catch((error) => console.log(error));

module.exports = app;

