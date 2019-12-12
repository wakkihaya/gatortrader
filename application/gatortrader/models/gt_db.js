var mysql = require('mysql');

// Establish connection to the database from app.js file of application
var database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fr0ntEndBackEnd',
    database: 'gt_database'
});

//connect to database
database.connect(function(err) {
    if (err) console.log(err);
    console.log("Database connected!");
});

module.exports = database;