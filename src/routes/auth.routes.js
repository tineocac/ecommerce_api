const { Router } = require("express");
const router = Router();
const { userLogin } = require("../controllers");

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login Path
 *     tags: [Users]
 *     requestBody:
 *       description: To Login in you need an email and password, only that.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Login"
 *     responses:
 *       200:
 *         description: Ok
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
 *                     $ref: "#/components/schemas/Login"
 */

router.post("/auth/login", userLogin);

module.exports = router;
