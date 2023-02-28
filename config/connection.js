// Code that might help is below current code:

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;


// Code that may be useful from another repo. since we are using mysql and Heroku -> (.JAWSDB_URL) Please delete code if we don't need it:

// Set up MySQL connection.
//const mysql = require('mysql');
//let connection;

// Set up db connection in local or remote db
//if (process.env.JAWSDB_URL) {
	//connection = mysql.createConnection(process.//env.JAWSDB_URL);
//} else {
	//connection = mysql.createConnection({
		//host: process.env.DB_HOST,
		//port: 3306,
		//user: process.env.DB_USER,
		//password: process.env.DB_PASSWORD,
		//database: 'burgers_db'
	//});
//}
// Make connection.
//connection.connect(function(err) {
	//if (err) {
		//console.error('error connecting: ' + err.stack);
		//return;
	//}
	//console.log('connected as id ' + connection.threadId);
//});

// Export connection for ORM to use.
//module.exports = connection;
