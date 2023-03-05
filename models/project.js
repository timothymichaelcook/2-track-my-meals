// Note: Importing built-in DataTypes from sequelize docs.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {
  // class Meal extends model

  // Using a conditional statement to check per week if a user ate take-out (unhealthy). More than 3 is unhealthy -> true.
  ateTakeOut() {
    if (this.numberOftakeOut <= 3) {
      return false;
    } else {
      return true;
    }
  }

  // Using a conditional statement to check per month if a user ate too much take-out (unhealthy).
  ateTooMuchTakeOut() {
    if (this.numberOftakeOut > 12) {
      return true;
    } else {
      return false;
    }
  }
}
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
    numberOftakeOut: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goal_met: {
      type: DataTypes.INTEGER,
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
