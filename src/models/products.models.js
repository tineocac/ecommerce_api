const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 * 
 *     Products:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Article
 *         price:
 *           type: float
 *           example: 999.99
 *         availableQty:
 *           type: integer
 *           example: 0
 *         status:
 *            type: enum
 *            example: available
 *         image: 
 *            type: string
 *            example: null
 *         createdAt:
 *            type: date
 *            example: date
 *         updatedAt:
 *             type: date
 *             example: date
 * 
 *     CreateProductResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: New product was created succesfuly
 * 
 *     CreateProducts:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: Article
 *         price: 
 *           type: float
 *           example: 999.99
 *         availableQty:
 *           type: integer
 *           example: 0
 *         userId:
 *           type: integer
 *           example: 1
 *         image: 
 *           type: string
 *           example: URL
 *
 */

const Products = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "available_qty",
  },
  status: {
    type: DataTypes.ENUM("available", "notAvailable"),
    defaultValue: "available",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  image: {
    type: DataTypes.STRING,
  },
});

module.exports = Products;
