const Router = require("express").Router();
const controller = require("../controllers/ExerciseController");

Router.post("/:user_id", controller.CreateExercise);
Router.delete("/:id", controller.DeleteExercise);

module.exports = Router;
