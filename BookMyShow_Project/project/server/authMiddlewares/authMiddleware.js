const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const verifiedtoken = jwt.verify(token, `${process.env.SECRATE_KEY}`)
  console.log(verifiedtoken);
  next();
  
  
};
