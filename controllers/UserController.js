const { User, PersonalInfo, Meal, Food, Exercise } = require("../models");
const { hashPassword, passwordValid, createToken } = require("../middleware");

const CreateUser = async (req, res) => {
  try {
    const { lastName, firstName, email, password } = req.body;
    let first_name = firstName;
    let last_name = lastName;
    // let password_digest = password;

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
    if (
      user &&
      (await passwordValid(req.body.password, user.password_digest))
    ) {
      let payload = {
        id: user.id,
      };
      let token = createToken(payload);
      return res.send({ user, token });
    }
    res.send({ msg: "invalid" });
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    if (await passwordValid(req.body.originalPassword, user.password_digest)) {
      const password_digest = await hashPassword(req.body.newPassword);
      const user = User.update(
        {
          password_digest: password_digest,
        },
        {
          where: { id: id },
          returning: true,
        }
      );
      return res.send(user);
    }
    res.send({ msg: "invalid" });
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
    const diary = await User.findByPk(req.params.user_id, {
      attributes: ["id", "first_name"],
      include: [
        { model: PersonalInfo },
        {
          // where: { createdAt: req.body.date },
          model: Exercise,
        },
        {
          // where: { createdAt: req.body.date },
          model: Meal,
          include: [{ model: Food }],
        },
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
  UpdateUser,
};
