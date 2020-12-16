"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercise.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          tableName: "users",
          key: "id",
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cals_burned: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activity_level: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Exercise",
      tableName: "exercises",
    }
  );
  return Exercise;
};
