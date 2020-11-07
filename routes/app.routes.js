const express = require('express');
const router = express.Router();

// serves the home page
router.get('/', function (req, res, next) { // NOTE: this middleware wasn't moved in a separate controller file because it is very simple and there is only one route of this kind (as of yet)
    res.render('index', { title: 'Express' });
});

const install = function (app) {
    app.use(router);
};

module.exports = install;
