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

const makeOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OrdersServices.buy(id);
    if (result == 0) {
      res.json({
        message: `Oops, something went wrong, maybe the submitted data is incorrect o the id doesn't exist`,
      });
    } else {
      res.json({ message: "Order placed successfully" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await OrdersServices.getOrders(userId);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = {
  createNewOrder,
  addProductsInOrder,
  makeOrder,
  getAllOrders,
};
