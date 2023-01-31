const express = require("express");
const router = express.Router();

const { login } = require("./auth");
const { adminAuth } = require("../middleware/auth");

router.route("/login").post(login);

module.exports = router;
