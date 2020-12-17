const { Exercise } = require("../models");

const CreateExercise = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id);
    const body = req.body;
    const exercise = await Exercise.create({
      user_id: user_id,
      description: body.description,
      cals_burned: body.calsBurned,
      activity_level: body.activityLevel,
      duration: body.duration,
    });
    res.send(exercise);
  } catch (error) {
    throw error;
  }
};

const DeleteExercise = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    await Exercise.destroy({ where: { id: id } });
    res.send({ msg: `deleted exercise id: ${id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateExercise,
  DeleteExercise,
};
