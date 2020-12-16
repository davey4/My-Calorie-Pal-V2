const { User, PersonalInfo, Meal, Food, Exercise } = require("../models");
const { hashPassword, passwordValid, createToken } = require("../middleware");

const CreateUser = async (req, res) => {
  try {
    const { lastName, firstName, email, password } = req.body;
    const last_name = lastName;
    const first_name = firstName;
    const password_digest = await hashPassword(password);
    const user = await User.create({
      last_name,
      first_name,
      email,
      password_digest,
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};

const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (user && (await passwordValid(req.body.password, user.password))) {
      let payload = {
        id: user.id,
      };
      let token = createToken(payload);
      return res.send({ user, token });
    }
  } catch (error) {
    throw error;
  }
};

const RefreshSession = async (req, res) => {
  try {
    const { token } = res.locals;
    const user = await User.findByPk(token.id, {
      attributes: ["id"],
    });
    res.send({ user, status: "OK" });
  } catch (error) {
    throw error;
  }
};

const GetDiary = async (req, res) => {
  try {
    const diary = await User.findByPk(req.body, {
      attributes: [],
      include: [
        { model: PersonalInfo },
        { model: Exercise },
        { model: Meal, include: [{ model: Food }] },
      ],
    });
    res.send(diary);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateUser,
  LoginUser,
  RefreshSession,
  GetDiary,
};
