const { PersonalInfo } = require("../models");

const CreateProfile = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id);

    await PersonalInfo.destroy({ where: { user_id: user_id } });

    const {
      gender,
      age,
      height,
      weight,
      goalWeight,
      weeklyGoal,
      recCalIntake,
    } = req.body;
    let goal_weight = goalWeight;
    let weekly_goal = weeklyGoal;
    let rec_cal_intake = recCalIntake;
    let body = {
      user_id,
      gender,
      age,
      height,
      weight,
      goal_weight,
      weekly_goal,
      rec_cal_intake,
    };
    const profile = PersonalInfo.create(body);
    res.send(profile);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateProfile,
};
