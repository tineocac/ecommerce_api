const { CartServices } = require("../services");

const addProductsInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const product = req.body;
    const result = await CartServices.addProducts({ cartId, ...product });
    res.status(201).json({ message: "Product created succesfully" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

const showProductsInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const result = await CartServices.showProducts(cartId);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

const makePurchase = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const result = await CartServices.buy(cartId);
    res.json({ message: "Succesful purchase" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { addProductsInCart, showProductsInCart, makePurchase };
