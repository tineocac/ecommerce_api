const app = require("./app");
require("dotenv").config();
const sawggerDocs = require("../swagger");

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  () => {
    console.log(`Server is runnig at port: ${PORT}`);
  },
  sawggerDocs(app, PORT)
);
