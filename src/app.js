const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");

const app = express();

app.use(express.json());
initModels();

db.authenticate()
  .then(() => console.log("Succeful aunthentication"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("Succesful synchronization"))
  .catch((error) => console.log(error));

module.exports = app;
