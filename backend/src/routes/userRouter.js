const express = require("express");
const { register, login, logout, getInfo } = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getInfo", getInfo);

module.exports = router;
