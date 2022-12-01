const { Router } = require("express");
const router = Router();
const { createUser } = require("../controllers");

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: To create a new user you need an username, email and password.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Users"
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: "#/components/schemas/Users"
 *
 */

router.post("/users", createUser);

module.exports = router;
