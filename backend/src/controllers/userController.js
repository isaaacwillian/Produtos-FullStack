const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { loginValidate, registerValidate } = require("../validations/validateUser");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { error } = registerValidate(req.body);
  if (error) return res.status(400).send(error.message);

  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });

    await user.save();
    return res.send(user);
  } catch (err) {
    return res.status(400).json({ error: "User already exists" });
  }
};

exports.login = async (req, res) => {
  const { error } = loginValidate(req.body);
  if (error) return res.status(400).send(error.message);

  const selectedUser = await User.findOne({ email: req.body.email }).select("+password");
  if (!selectedUser) {
    return res.status(400).send("Email or password is incorrect");
  }

  const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
  if (!passwordAndUserMatch) {
    return res.status(400).send("Email or password is incorrect");
  }

  const accessToken = jwt.sign({ _id: selectedUser._id }, "token_secret", {
    expiresIn: "1d",
  });

  res.cookie("access-token", accessToken, {
    maxAge: 60 * 60 * 24 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  return res.send("User Logged");
};

exports.logout = async (req, res) => {
  res.clearCookie("access-token", {
    sameSite: "none",
    secure: true,
  });
  return res.send("User Logged out").end();
};

exports.getInfo = async (req, res) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) return res.status(401).json({ error: "User not authenticated" });

  try {
    const validToken = jwt.verify(accessToken, "token_secret");
    req.user = validToken;
    const user = await User.findOne({ _id: req.user._id });
    if (!user) return res.status(404).json({ error: "Not found user" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json(error);
  }
};
