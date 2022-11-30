const { Users, Cart } = require("../models");

class UsersServices {
  static async create(newUser) {
    try {
      const result = await Users.create(newUser);
      const userId = result.id;
      console.log(userId);
      const cart = await Cart.create({ userId });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
