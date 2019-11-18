var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");
const multer = require('multer');



var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const upDir = path.join(__dirname,"public/upload");
const uploadDir = multer({dest: upDir});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/aboutUs", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutUs.html");
});

app.get("/aboutAnmol", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutAnmol.html");
});

app.get("/aboutAnton", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutAnton.html");
});

app.get("/aboutDann", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutDann.html");
});

app.get("/aboutGrayson", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutGrayson.html");
});

app.get("/aboutHayato", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutHayato.html");
});

app.get("/aboutSamjot", (req, res) => {
  res.sendFile(__dirname + "/public/frontend/aboutSamjot.html");
});

app.get("/", (req, res) => {
  res.render("index");
});

// Establish connection to the database from app.js file of application
const mysql = require("mysql");
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fr0ntEndBackEnd",
  database: "gt_database"
});

//for validation
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.json({
  limit: '50mb'
}));


const { check, validationResult } = require('express-validator');

//connect to database
database.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
});

//for default page with all items.
app.get("/index", function(req, res) {
  database.query("select * from items", (err, result) => {
    if (err) console.log(err);
    res.render("index", { searchResult: result, results: result.length });
  });
});

//search function
function search(req, res, next) {
  var searchTerm = req.query.search;
  var category = req.query.category;

  console.log("cate" + category);
  console.log("search" + searchTerm);

  let query = "select * from items";
  if (searchTerm != "" && category != "") {
    query =
      "select * from items where category_id = " +
      category +
      " and (item_name like '%" +
      searchTerm +
      "%' or description like '%" +
      searchTerm +
      "%')";
  } else if (searchTerm != "" && category == "") {
    query =
      "select * from items where item_name like '%" +
      searchTerm +
      "%' or description like '%" +
      searchTerm +
      "%'";
  } else if (searchTerm == "" && category != "") {
    query = "select * from items where category_id =  " + category;
  } else {
    // no words -> redirect to /index
    return res.redirect("/index");
  }
  database.query(query, (err, result) => {
    req.searchResult = result;
    req.searchTerm = searchTerm;
    req.category = category;
    next();
  });
}

//display the result of search by using search function
app.get("/search", search, (req, res) => {
  //searchResult is type of Json
  var searchResult = req.searchResult;
  res.render("search_result", {
    results: searchResult.length,
    searchTerm: req.searchTerm,
    searchResult: searchResult,
    category: req.category
  });
});

//for sell page
app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/signIn", (req, res) => {
  res.render("signIn");
});

app.get("/registration", (req, res) => {
  res.render("registration");
});

//put the input values on sell page to database
app.post("/new",uploadDir.single('itemImage'),(req, res) =>{
  var itemName = req.body.itemName;
  var itemCategory = req.body.category;
  var itemCost = req.body.itemCost;
  var itemDescription = req.body.itemDescription;
  var itemImage = req.body.itemImage;

  //Actually,pull user ID from Login information.
  var userID =5;

  var query = 'INSERT INTO items (item_name, description, image, category_id, price, user_id) values ("'+ itemName+'",'+ '"'+itemDescription+'",'+ '"'+itemImage+'",'+ '"'+itemCategory+'",'+ '"'+itemCost+'",'+ '"'+userID+'")';
  database.query(query, function(err,rows){
    res.redirect('/index');
  });
});

// view a single item listing
app.get("/item_listing/:id", (req, res) => {
  var item_id = parseInt(req.params.id) + 1;
  console.log("item" + item_id);
  database.query(
    "select * from items where item_id =" + item_id,
    (err, result) => {
      if (err) console.log(err);
      console.log("sr: "+ result );
      console.log("r: "+result.length );
      res.render("item_listing", {
        searchResult: result,
        results: result.length
      });
    }
  );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//to display the static files(images) to the .ejs
app.use(express.static("public"));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { error: err });
});

app.listen(3000);
module.exports = app;
