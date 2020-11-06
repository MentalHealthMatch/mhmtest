const express = require('express');
const { getAllUsers, getUserById } = require('../utils/userHelpers');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await getAllUsers();

    res.status(200).json(users);
  } catch(error) {
    res.status(500).json({error});
  }
});

/* GET user */
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;

    const user = await getUserById(Number(id));

    if(!user){
      return res.status(404).send("User id not found. Please try again.");
    }

    res.status(200).json(user);
  } catch(error) {
    res.status(500).json({error});
  }
});



module.exports = router;
