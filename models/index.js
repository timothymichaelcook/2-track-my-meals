// Importing ./User file and ./Project file into this file.

const User = require('./User');
const Project = require('./Meal');

//Using onDelete:'CASCADE to delete all associated informaton for any user who has been deleted.
User.hasMany(Meal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Meal.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Meal };
