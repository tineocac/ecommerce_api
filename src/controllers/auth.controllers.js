const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    console.log(credentials.password);
    const result = await AuthServices.authenticate(credentials);
    if (result) {
      const { id, username, email } = result.result;
      const userData = { id, username, email };
      const token = await AuthServices.getToken(userData);
      userData.token = token
      res.json({ ...userData});
    } else if (result === null) {
      res.status(400).json({
        message:
          "Oops, it seems that the email address you entered is incorrect or does not exist.",
      });
    } else {
      res.status(400).json({
        message: "Oops, it seems that the password you entered is incorrect",
      });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, check email, password or some field required",
    });
  }
};

module.exports = { userLogin };
