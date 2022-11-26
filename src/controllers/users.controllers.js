const { UsersServices } = require("../services");

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json({message: 'User succesfully created'});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong, check the submitted data"
    });
  }
};

module.exports = { createUser };
