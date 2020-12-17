const { Food } = require("../models");

const CreateFood = async (req, res) => {
  try {
    let meal_id = parseInt(req.params.meal_id);
    const body = req.body;
    const food = await Food.create({
      description: body.description,
      servings: body.servings,
      serving_size: body.servingSize,
      calories: body.calories,
      protein: body.protein,
      carbs: body.carbs,
      fat: body.fat,
      meal_id: meal_id,
    });
    res.send(food);
  } catch (error) {
    throw error;
  }
};

const DeleteFood = async (req, res) => {
  try {
    await Food.destroy({ where: { id: req.params.food_id } });
    res.send({ msg: `deleted food id: ${id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateFood,
  DeleteFood,
};
