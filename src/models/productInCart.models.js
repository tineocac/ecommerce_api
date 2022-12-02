const db = require("../utils/database");
const { DataTypes } = require("sequelize");


/**
 * @openapi
 * components:
 *   schemas:
 *     addProducts:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *            type: integer
 *            example: 1  
 * 
 *     addProductsResponse:
 *       type: object
 *       properties:
 *         message: 
 *           type: string
 *           example: Product succesfully added
 * 
 *     showProductsInCart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: integer
 *           example: 1
 *         status:
 *           type: enum
 *           example: pending
 *         item:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: article
 *             price:
 *               type: float
 *               example: 299.99
 *             image:
 *               type: string
 *               example: URL
 * 
 *     makePurchase:
 *       type: object 
 *       properties:
 *         message:
 *           type: string
 *           example: Succesful purchase
 */

const ProductInCart = db.define(
  "product_in_cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "cart_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.ENUM("pending", "purchased"),
      defaultValue: "pending",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInCart;
