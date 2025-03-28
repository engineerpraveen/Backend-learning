const express = require("express");
const userController = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", userController.registerUser);

// router.get('/api/login', userLogin);
module.exports = router;
