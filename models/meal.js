"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meal.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Meal.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_cals: DataTypes.INTEGER,
      total_protein: DataTypes.INTEGER,
      total_carbs: DataTypes.INTEGER,
      total_fat: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Meal",
      tableName: "meals",
    }
  );
  return Meal;
};
