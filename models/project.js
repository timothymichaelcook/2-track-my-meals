// Note: Importing built-in DataTypes from sequelize docs.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {} // class Meal extends Model

Project.init(
  // Meal.init
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    meal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meal_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'breakfast',
      validate: {
        isIn: ['breakfast', 'lunch', 'dinner'],
      },
    },
    is_healthy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    goal_met: {
      type: DataTypes.BOOLEAN.INTEGER,
      allowNull: false,
    },
    meal_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project', // modelName: 'meal'
  }
);

module.exports = Project; //module.export = Meal;
// Note: change file name -> Meal.js
