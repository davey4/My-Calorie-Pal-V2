const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const PersonalInfoRouter = require("./PersonalInfoRouter");
const MealRouter = require("./MealRouter");
const FoodRouter = require("./FoodRouter");
const ExerciseRouter = require("./ExerciseRouter");

Router.use("/user", UserRouter);
Router.use("/info", PersonalInfoRouter);
Router.use("/meal", MealRouter);
Router.use("/food", FoodRouter);
Router.use("/exercise", ExerciseRouter);

module.exports = Router;
