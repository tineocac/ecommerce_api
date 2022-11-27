const { ProductsServices } = require("../services");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await ProductsServices.getProducts();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { getAllProducts };
