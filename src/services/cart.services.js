const { ProductInCart, Products } = require("../models");

class CartServices {
  static async addProducts(product) {
    console.log(product);
    try {
      const result = await ProductInCart.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async showProducts(cartId) {
    try {
      const result = await ProductInCart.findAll({
        where: { cartId },
        attributes: ["quantity", "status"],
        include: {
          model: Products,
          as: "item",
          attributes: ["name", "price", "image"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
