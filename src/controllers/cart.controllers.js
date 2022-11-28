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

module.exports = { addProductsInCart };
