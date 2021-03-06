const { PersonalInfo } = require("../models");

const CreateProfile = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id);

    await PersonalInfo.destroy({ where: { user_id: user_id } });

    const body = req.body;
    let profileBody = {
      user_id: user_id,
      gender: body.gender,
      age: body.age,
      height: body.height,
      weight: body.weight,
      goal_weight: body.goalWeight,
      weekly_goal: body.weeklyGoal,
      rec_cal_intake: body.recCalIntake,
    };
    const profile = await PersonalInfo.create(profileBody);

    res.send(profile);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateProfile,
};
