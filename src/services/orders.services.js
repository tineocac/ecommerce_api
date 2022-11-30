const { Orders, ProductInOrder } = require("../models");

class OrdersServices {
  static async createOrder(userId) {
    try {
      const result = await Orders.create(userId);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addProducts(products) {
    try {
      console.log(products);
      const result = await ProductInOrder.create(products);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async buy(id) {
    try {
      const result = await Orders.update(
        { status: "complete" },
        {
          where: { id },
        }
      );
      if (result) {
        const orders = await ProductInOrder.update(
          {
            status: "complete",
          },
          {
            where: { orderId: id },
          }
        );
        return orders;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getOrders(userId) {
    try {
      const result = await Orders.findAll({
        where: { userId },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrdersServices;
