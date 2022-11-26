const { Users } = require("../models");
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

db.sync({ force: true }).then(() => {
  users.forEach(async (user) => await Users.create(user));
});
