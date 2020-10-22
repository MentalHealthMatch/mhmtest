const express = require('express');
const router = express.Router();

/* GET root api */
router.get('/', function (req, res, next) {
    res.send('Use a specific endpoint. Endpoint docs are found at www.somenevermaintainedsite.com');
});

module.exports = router;