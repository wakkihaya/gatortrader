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
	database: 'gt_database',
});

//connect to database
database.connect(function(err) {
	if (err) console.log(err);
	console.log('Connected!');
});

app.get('/index',function (req,res) {
	res.render('index');
});

function search(req, res, next) {

	var searchTerm = req.query.search;

	var category = req.query.category;

	console.log("cate" +category);
	console.log("search"+searchTerm);

	let query = 'select * from items';
	if (searchTerm != '' && category != '') {
		query = "select * from items where category_id = " + category + " and (item_name like '%" + searchTerm + "%' or description like '%" + searchTerm + "%')";
	}
	else if (searchTerm != '' && category == '') {
		query = "select * from items where item_name like '%" + searchTerm + "%' or description like '%" + searchTerm + "%'";
	}
	else if (searchTerm == '' && category != '') {
		query = 'select * from items where category_id =  ' + category;
	}else{ // default -> index.ejs
		return res.render("index");
	}
	database.query(query, (err, result) => {
		req.searchResult = result;
		req.searchTerm = searchTerm;
		req.category = category;
		next();
	});
}

app.get('/search', search, (req, res) => {

	//searchResult is type of Json
	var searchResult = req.searchResult;
	res.render('search_result',{
		results: searchResult.length,
		searchTerm: req.searchTerm,
		searchResult: searchResult,
		category: req.category
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//to display the static files(images) to the .ejs
app.use(express.static('public'));

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
