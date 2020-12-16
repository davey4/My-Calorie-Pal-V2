const Router = require("express").Router();
const controller = require("../controllers/PersonalInfoController");

Router.get("/", controller.CreateProfile);

module.exports = Router;
