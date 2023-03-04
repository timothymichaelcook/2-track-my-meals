// Importing ./User file and ./Project file into this file.

const User = require('./User');
const Project = require('./Project');

//Using onDelete:'CASCADE to delete all associated informaton for any user who has been deleted.
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project };
