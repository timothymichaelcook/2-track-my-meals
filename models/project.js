// P Note: Importing built-in DataTypes from sequelize documentation available online.
const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection');

class Project extends Model {}           // class Meal extends Model {}

Project.init(                            // Meal.init(
  {
    id: {                         
      type: DataTypes.INTEGER,         
      allowNull: false,                 //P Note: allowNull: false, -> this field cannot be left empty or null.
      primaryKey: true,                 //P Note: primaryKey: true, ->this field will be the primaryKey for    
      autoIncrement: true,                       // the table. The primaryKey id's each row in the table.
    },                                  //P Note: autoIncrement: true,->Value for this row field increment +1
    name: {                             // meal_name:  {                            // <- P code change.
      type: DataTypes.STRING,         
      allowNull: false,              
    },
    description: {                      // is_healthy: {                           // <- P code change.
      type: DataTypes.STRING,           // type: DataTypes.BOOLEAN,                // <- P code change.
                                        //allowNull: false,                        // <- P code change.
    },
    date_created: {                     // meal_date: {                           // <- P code change.
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    needed_funding: {                 // <- P Note: remove this model option.
      type: DataTypes.FLOAT,          // <- P Note: remove.
      allowNull: false,               // <- P Note: remove.
    },                                // <- P Note: remove.
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
    modelName: 'project',             //modelName:'meal',                       // <- P code change.
  }
);

module.exports = Project;             //module.export = Meal;   // P Note: change file name -> Meal.js

