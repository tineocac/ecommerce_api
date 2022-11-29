const { OrdersServices } = require("../services");

const createNewOrder = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await OrdersServices.createOrder({ userId });
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      messge: "Oops, something went wrong",
    });
  }
};

const addProductsInOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const products = req.body;
    const result = await OrdersServices.addProducts({ orderId, ...products });
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { createNewOrder, addProductsInOrder };
