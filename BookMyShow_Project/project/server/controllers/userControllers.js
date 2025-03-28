const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    // @ts-ignore
    if (userExists) {
      res.send({
        success: true,
        message: "User already exists",
      });
    }
  } catch (error) {
    console.log(error);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //   console.log(hashedPassword);

  req.body.password = hashedPassword;

  // const user = await User(req.body);
  //const user = await User.create(req.body);
  const newUser = await new User(req.body);

  await newUser.save();

  res.send({
    success: true,
    message: "registered successfully",
  });
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send({
        success: false,
        message: "regiter first",
      });
    }
    const dbSavedPassword = user.password;

    const inputPassword = req.body.password;

    const isPasswordValid = await bcrypt.compare(
      inputPassword,
      dbSavedPassword
    );
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.send({
        success: false,
        message: "sorry, Invalid password entered",
      });
    }

    res.send({
      success: true,
      message: "User Logged In",
    });
  } catch (error) {}
};
