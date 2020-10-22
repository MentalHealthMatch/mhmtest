const express = require('express');
const router = express.Router();

/* GET Classes listing. */
router.get("/", function (req, res, next) {


    req.app.locals.db.getClasses()
    .then( classes => {
        res.json(classes)
    })
    .catch(error => {
        res.status(500).send(error.message)
    });

});

module.exports = router;



