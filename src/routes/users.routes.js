const { Router } = require("express");
const router = Router();
const { createUser } = require("../controllers");

router.post("/users", createUser);

module.exports = router;
