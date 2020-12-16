"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.belongsTo(models.Meal, {
        foreignKey: "meal_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Food.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      servings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serving_size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      protein: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      carbs: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "meals",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Food",
      tableName: "foods",
    }
  );
  return Food;
};
