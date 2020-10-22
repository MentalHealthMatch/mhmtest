const express = require('express');
const router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {

    req.app.locals.db.getUsers()
    .then( users => {
        res.json(users)
    })
    .catch(error => {
        res.status(500).send(error.message)
    });

});

module.exports = router;



