const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const userExists = User.findOne({ email: req.body.email });
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
  //   const user = await User(req.body);
  //   const user = await new User(req.body);

  const user = await User.create(req.body);
  await user.save();

  res.send({
    success: true,
    message: "registered successfully",
  });
};
