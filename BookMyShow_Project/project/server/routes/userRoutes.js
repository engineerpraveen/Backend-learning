const express = require("express");
const userController = require("../controllers/userControllers");
const authMiddleware = require("../authMiddlewares/authMiddleware");
const router = express.Router();

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.get("/get-current-user", authMiddleware);

module.exports = router;
