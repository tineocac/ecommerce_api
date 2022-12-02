const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API ECOMMERCE",
      version: "1.0.0",
      description:
        "API used to create an ecommerce, make purchases, sell products and perform all kinds of queries related to a market place.",
    },
  },
  apis: [
    "./src/routes/users.routes.js",
    "./src/models/users.models.js",
    "./src/routes/products.routes.js",
    "./src/models/products.models.js",
    "./src/routes/cart.routes.js",
    "./src/routes/auth.routes.js",
    "./src/models/productInCart.models.js",
    "./src/routes/orders.routes.js",
    "./src/models/orders.models.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const sawggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Docs available at port http://localhost:${port}/api/v1/docs`);
};

module.exports = sawggerDocs;
