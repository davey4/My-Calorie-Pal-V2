const Router = require("express").Router();
const controller = require("../controllers/PersonalInfoController");

Router.post("/:user_id", controller.CreateProfile);

module.exports = Router;
