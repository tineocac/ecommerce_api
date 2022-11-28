const { Products, Users, ProductInCart } = require("../models");

class ProductsServices {
  static async getProducts() {
    try {
      const result = await Products.findAll({
        attributes: {
          exclude: ["user_id", "userId"],
        },
        include: {
          model: Users,
          as: "seller",
          attributes: ["username"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newProduct) {
    try {
      const result = await Products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;
