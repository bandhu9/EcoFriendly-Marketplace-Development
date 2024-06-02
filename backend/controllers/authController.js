const User = reqquire("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ $or: [{ username }, { email }] });
    if (user) {
      return res
        .status(400)
        .json({ error: "username or email already in use" });
    }

    user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );

    user.tokens = user.tokens.concat({ token });
    await user.save();
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Credentials.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid Credentials.");
    }

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );

    user.tokens = user.tokens.concat({ token });
    await user.save();
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.json({ message: "Logout successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
