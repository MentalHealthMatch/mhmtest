

var createError = require ('http-errors');
var express = require ('express');
var path = require ('path');
var cookieParser = require ('cookie-parser');
var responseTime = require ('response-time')

var app = express ();

// view engine setup
app.set ('views', path.join (__dirname, 'Templates'));
app.set ('view engine', 'ejs');

app.use (express.json ());
app.use (express.urlencoded ({ extended: false }));
app.use (cookieParser ());
app.use (express.static (path.join (__dirname, 'Public')));

app.use ('/', require('Routes/First'));
app.use ('/Healers', require('Routes/Healers'));
app.use ('/Sessions', require('Routes/Sessions'));
app.use ('/', require('Routes/Last'));

app.get ("/:Healer", (req, res, next) => {

	res.end ();
});

app.use (function (req, res, next) {
	next (createError (404));
});

// catch 404 and forward to error handler
app.use (function (req, res, next) {
	next (createError (404));
});

// error handler
app.use (function (err, req, res, next) {
	console.error (err);

	res.status (err.status || 500);
	res.end ();
});

module.exports = app;
