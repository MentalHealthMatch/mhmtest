const express = require('express');
const userRouter = express.Router();
const {
    getAllUsers,
    getUser,
    // addUser,
    // updateUser,
    // deleteUser
} = require('../../controllers/users.controllers');

userRouter.get('/:id', getUser);
userRouter.get('/', getAllUsers);

// NOTE: generally an API will have the following routes as well, but these haven't been implemented because that would require adding a lot of functionality that a DB provides
// userRouter.post('/', addUser);
// userRouter.put('/:id', updateUser);
// userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
