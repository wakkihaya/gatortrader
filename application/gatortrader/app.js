var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/aboutUs',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutUs.html');
});

app.get('/aboutAnmol',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutAnmol.html');
});

app.get('/aboutAnton',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutAnton.html');
});

app.get('/aboutDann',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutDann.html');
});

app.get('/aboutGrayson',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutGrayson.html');
});

app.get('/aboutHayato',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutHayato.html');
});

app.get('/aboutSamjot',(req, res)=>{
	res.sendFile(__dirname + '/public/frontend/aboutSamjot.html');
});

app.get('/',(req, res)=>{
	res.render('index');
});


// Establish connection to the database from app.js file of application
const mysql = require('mysql');
const database = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Fr0ntEndBackEnd',
	database: 'gt_database'
});

//connect to database
database.connect(function(err) {
	if (err) console.log(err);
	console.log('Connected!');
});


app.get('/index',function (req,res) {
	//get data from db
	 database.query('select item_name from items',function (error,results,fields) {
	 	if(error) throw error;
	 	else {
			//send the data from db to index.ejs
			res.render('index', {item_list: results});
		}
	 });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{error:err});
});

app.listen(3000);
module.exports = app;
