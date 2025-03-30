const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    // @ts-ignore
    if (userExists) {
      res.send({
        success: false,
        message: "User already exists",
      });
    }
  } catch (error) {
    console.log(error);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  // const user = await User(req.body);
  //const user = await User.create(req.body);
  const newUser = await new User(req.body);
  await newUser.save();

  res.send({
    success: true,
    message: "Registered Successfully",
  });
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "Register First",
      });
    }
    const dbSavedPassword = user.password;
    const inputPassword = req.body.password;
    const isPasswordValid = await bcrypt.compare(
      inputPassword,
      dbSavedPassword
    );
    if (!isPasswordValid) {
      return res.send({
        success: false,
        message: "Sorry, Invalid password entered",
      });
    }

    const token = jwt.sign({ userId: user._id }, `${process.env.SECRATE_KEY}`);

    res.send({
      success: true,
      message: "User Logged In",
      token: token,
    });
  } catch (error) {}
};
