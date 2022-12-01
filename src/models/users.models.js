const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Fulano
 *         email:
 *           type: string
 *           example: example@gmail.com
 *         password:
 *           type: string
 *           example: 12345678
 *     Login:
 *       type: object
 *       properties:
 *          email: 
 *            type: string
 *            example: example@gmail.com
 *          password:
 *            type: string
 *            example: 12345678
 *   securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 */

const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
