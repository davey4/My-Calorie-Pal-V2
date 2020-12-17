const Router = require("express").Router();
const controller = require("../controllers/MealController");

Router.post("/:user_id", controller.CreateMeal);
Router.delete("/meal_id", controller.DeleteMeal);
Router.put("/:meal_id", controller.UpdateMeal);
Router.get("/:user_id", controller.GetMealsByDate);

module.exports = Router;
