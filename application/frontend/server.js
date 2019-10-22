var express = require('express');
var app = express();
var path = require('path');

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));



app.get('/',(req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/index',(req, res)=>{
        res.sendFile(__dirname + '/public/index.html');
});

app.get('/aboutUs',(req, res)=>{
	res.sendFile(__dirname + '/public/aboutUs.html');
});

app.get('/aboutAnmol',(req, res)=>{
        res.sendFile(__dirname + '/public/aboutAnmol.html');
});

app.get('/aboutAnton',(req, res)=>{
        res.sendFile(__dirname + '/public/aboutAnton.html');
});

app.get('/aboutDann',(req, res)=>{
	res.sendFile(__dirname + '/public/aboutDann.html');
});

app.get('/aboutGrayson',(req, res)=>{
        res.sendFile(__dirname + '/public/aboutGrayson.html');
});

app.get('/aboutHayato',(req, res)=>{
        res.sendFile(__dirname + '/public/aboutHayato.html');
});

app.get('/aboutSamjot',(req, res)=>{
        res.sendFile(__dirname + '/public/aboutSamjot.html');
});

app.get('/*',(req, res)=>{
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(req, res){
	console.log('Express JS is ready for port 3000');
});
