const express = require("express");
const router = express.Router();
const {
  signup,
  accountActivation,
  signin,
  forgotPassword,
  resetPassword,
  loadUser,
} = require("../controllers/user");
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/user");

const {  isAuth } = require("../middleware/signIn");
router.post("/signup", userSignupValidator, runValidation, signup);

router.post("/account-activation", accountActivation);

router.post("/signin", userSigninValidator, runValidation, signin);

router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);

router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);

router.get("/profile", isAuth, loadUser);


module.exports = router;
