const { Meal, Food } = require("../models");

const CreateMeal = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id);
    const body = req.body;
    const meal = await Meal.create({
      user_id: user_id,
      name: body.name,
      total_cals: body.totalCals,
      total_protein: body.totalProtein,
      total_carbs: body.totalCarbs,
      total_fat: body.totalFat,
    });
    res.send(meal);
  } catch (error) {
    throw error;
  }
};

const DeleteMeal = async (req, res) => {
  try {
    let id = parseInt(req.params.meal_id);
    await Meal.destroy({ where: { id: id } });
    res.send({ msg: `deleted meal id: ${id}` });
  } catch (error) {
    throw error;
  }
};

const UpdateMeal = async (req, res) => {
  try {
    let id = parseInt(req.params.meal_id);
    const body = req.body;
    const meal = await Meal.update(
      {
        name: body.name,
        total_cals: body.totalCals,
        total_protein: body.totalProtein,
        total_carbs: body.totalCarbs,
        total_fat: body.totalFat,
      },
      {
        where: { id: id },
        returning: true,
      }
    );
    res.send(meal);
  } catch (error) {
    throw error;
  }
};

const GetMealsByDate = async (req, res) => {
  try {
    const meals = await Meal.findAll({
      where: { user_id: req.params.user_id, createdAt: req.body.date },
      include: [{ model: Food }],
    });
    res.send(meals);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateMeal,
  DeleteMeal,
  UpdateMeal,
  GetMealsByDate,
};
