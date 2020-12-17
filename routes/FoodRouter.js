const Router = require("express").Router();
const controller = require("../controllers/FoodController");

Router.post("/:meal_id", controller.CreateFood);
Router.delete("/:food_id", controller.DeleteFood);

module.exports = Router;
