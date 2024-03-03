const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "Unauthorized" }] });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-hashed_password");

    // send not authorisation IF NOT USER
    if (!user) {
      return res.status(401).send({ errors: [{ msg: "Unauthorized" }] });
    }

    // if user exist
    req.user = user;

    next();
  } catch (error) {
    return res.status(500).send({ errors: [{ msg: "Server error" }] });
  }
};

