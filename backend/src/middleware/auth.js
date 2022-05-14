const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.validateToken = async (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken)
    return res.status(401).json({ error: "User not authenticated" });

  try {
    const validToken = jwt.verify(accessToken, "token_secret");
    req.user = validToken;
    const user = await User.findOne({ _id: req.user._id });
    if (!user) return res.status(404).json({ error: "Not found user" });
    next();
  } catch (error) {
    return res.status(401).json(error);
  }

  return null;
};
