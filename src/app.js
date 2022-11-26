const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const { errorHandling } = require("./middlewares");
const morgan = require("morgan");
const { usersRoutes, authRoutes } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
initModels();

db.authenticate()
  .then(() => console.log("Succeful aunthentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Succesful synchronization"))
  .catch((error) => console.log(error));

app.use("/api/v1", usersRoutes);
app.use("/api/v1", authRoutes);

app.use(errorHandling);

module.exports = app;
