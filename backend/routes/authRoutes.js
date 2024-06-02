const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { body } = require("express-validator");

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post(
  "/signup",
  [
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Invalid Email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
  ],
  authController.signup
);

module.exports = router;
