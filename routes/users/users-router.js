const express = require('express');
const usersService = require('./users-service');

const usersRouter = express.Router();

usersRouter
  .get('/', (req, res, next) => {
    Promise.all([usersService.getAllUsers(), usersService.getAllLastNames()]).then(
      users => {
        const map = new Map();
        users[0].forEach(user => map.set(user.id, user));
        users[1].forEach(user => map.set(user.id, {...map.get(user.id), ...user}));
        const merged = Array.from(map.values());

        res.json(merged);
      })
      .catch(next);
  });

usersRouter
  .get('/:id', (req, res, next) => {
    usersService.getUsersById(req.params.id).then(users => {
      res.json(users);
    })
    .catch(next);
  });

module.exports = usersRouter;
