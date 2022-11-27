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

const createNewProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductsServices.create(newProduct);
    res.status(201).json({ message: "New product was created succesfuly" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong, verify the submitted data",
    });
  }
};

const addProductInCart = async (req, res, next) => {
  try {
    const product = req.body;
    const result = await ProductsServices.addProduct(product);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { getAllProducts, createNewProduct, addProductInCart };
