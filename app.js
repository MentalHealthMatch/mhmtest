const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRoutes = require('./routes/index');
const errorHandler = require('./helpers/error-handler');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', apiRoutes);
app.use('/', defaultRouter);
app.use(errorHandler)

function defaultRouter(req, res, next) {
  res.render("index", { title: "Express" });
};

module.exports = app;
