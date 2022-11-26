const { Users } = require("../models");
const bcrypt = require("bcrypt");

class AuthServices {
  static async authenticate(credentials) {
    try {
      const { email, password } = credentials;
      const result = await Users.findOne({
        where: { email },
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? { isValid, result } : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
