const { Products, Users } = require("../models");

class ProductsServices {
  static async getProducts() {
    try {
      const result = await Products.findAll({
        attributes: {
          exclude: ["user_id", "userId"],
        },
        include: {
          model: Users,
          attributes: ["username"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;
