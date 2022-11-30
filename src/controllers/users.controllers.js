const { UsersServices } = require("../services");
const transporter = require("../utils/mailer");
const welcomeTemplate = require("../templates/welcome");

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json({ message: "User succesfully created" });
    await transporter.sendMail({
      from: "<carlostineocac@gmail.com>",
      to: result.email,
      subject: `Welcome ${result.username} to the best ecommerce`,
      // text: `Hi ${result.username}, you has created a new user in the best ecommerce`,
      html: welcomeTemplate(`${result.username}`),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong, check the submitted data",
    });
  }
};

module.exports = { createUser };
