const {
  Users,
  Products,
  Cart,
  Order,
  ProductInCart,
  ProductInOrder,
} = require("./index");

const initModels = () => {
  Users.hasMany(Products, { foreignKey: "user_id" });
  Products.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasOne(Cart, { foreignKey: "userd_id" });
  Cart.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasMany(Order, { foreignKey: "userd_id" });
  Order.belongsTo(Users, { foreignKey: "user_id" });

  Products.hasOne(ProductInCart, { foreignKey: "product_id" });
  ProductInCart.belongsTo(Products, { foreignKey: "product_id" });

  Cart.hasMany(ProductInCart, { foreignKey: "cart_id" });
  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });

  Products.hasOne(ProductInOrder, { foreignKey: "product_id" });
  ProductInOrder.belongsTo(Products, { foreignKey: "product_id" });

  Order.hasMany(ProductInOrder, { foreignKey: "order_id" });
  ProductInCart.belongsTo(Order, { foreignKey: "order_id" });
};

module.exports = initModels;
