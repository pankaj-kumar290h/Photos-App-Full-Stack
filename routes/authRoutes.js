const Router = require("express").Router();
const authController = require("../controllers/authController");

Router.post("/signup", authController.signup);
Router.post("/signin", authController.signin);

module.exports = Router;
