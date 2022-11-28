const { ProductInCart } = require("../models");

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
}

module.exports = CartServices;
