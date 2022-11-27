const { Users, Products, Cart } = require("../models");
const db = require("../utils/database");
const initModels = require("../models/initModels");

initModels();

const users = [
  { username: "Isabel", email: "isabel@gmail.com", password: "1234" },
  { username: "Carlos", email: "carlos@gmail.com", password: "1234" },
  { username: "Samuel", email: "samuel@gmail.com", password: "1234" },
  { username: "Xavier", email: "xavier@gmail.com", password: "1234" },
  { username: "Karla", email: "karla@gmail.com", password: "1234" },
  { username: "Orlimarys", email: "orlimarys@gmail.com", password: "1234" },
  { username: "Misael", email: "misael@gmail.com", password: "1234" },
  { username: "Rashel", email: "rashel@gmail.com", password: "1234" },
  { username: "Shirber", email: "shirber@gmail.com", password: "1234" },
  { username: "Karen", email: "karen@gmail.com", password: "1234" },
];

const products = [
  {
    name: "Phone",
    price: 100.99,
    availableQty: 24,
    userId: 2,
  },
  {
    name: "Laptop",
    price: 599.99,
    availableQty: 2,
    userId: 2,
  },
  {
    name: "Desktop",
    price: 989.99,
    availableQty: 12,
    userId: 2,
  },
  {
    name: "Audifonos",
    price: 15.12,
    availableQty: 6,
    userId: 2,
  },
  {
    name: "Altavoces",
    price: 22.99,
    availableQty: 12,
    userId: 2,
  },
  {
    name: "Monitor",
    price: 125.1,
    availableQty: 20,
    userId: 2,
  },
  {
    name: "Teclado",
    price: 25.66,
    availableQty: 200,
    userId: 2,
  },
  {
    name: "Mouse",
    price: 10.99,
    availableQty: 200,
    userId: 2,
  },
  {
    name: "Impresora",
    price: 236.19,
    availableQty: 5,
    userId: 2,
  },
  {
    name: "Servidor",
    price: 1678.0,
    availableQty: 1,
    userId: 2,
  },
];

const cart = [
  { userId: 1, totalPrice: 1 },
  { userId: 2, totalPrice: 1 },
  { userId: 3, totalPrice: 1 },
  { userId: 4, totalPrice: 1 },
  { userId: 5, totalPrice: 1 },
  { userId: 6, totalPrice: 1 },
  { userId: 7, totalPrice: 1 },
  { userId: 8, totalPrice: 1 },
  { userId: 9, totalPrice: 1 },
  { userId: 10, totalPrice: 1 },
];

db.sync({ force: true }).then(() => {
  users.forEach(async (user) => await Users.create(user));
  setTimeout(() => {
    products.forEach(async (product) => await Products.create(product));
  }, 100);
  setTimeout(() => {
    cart.forEach((cart) => Cart.create(cart));
  }, 200);
});
