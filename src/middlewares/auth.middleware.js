const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  if (tokenBearer) {
    const token = tokenBearer.replace("Bearer ", "");
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET, {
        algorithm: "HS512",
      });
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Oops, something went wrong",
      });
    }
  }
};

module.exports = authMiddleware;
