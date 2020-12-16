'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PersonalInfo.init({
    user_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    goal_weight: DataTypes.INTEGER,
    weekly_goal: DataTypes.STRING,
    rec_cal_intake: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PersonalInfo',
  });
  return PersonalInfo;
};