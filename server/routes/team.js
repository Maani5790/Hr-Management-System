const express = require('express');
const { getUser, addUser, getUserByID, deleteUser, editUser } = require('../controllers/team-controller.js');
const teamRouter = express.Router();

teamRouter.get('/', getUser);
teamRouter.post('/add', addUser);
teamRouter.get('/:id', getUserByID);
teamRouter.put('/:id', editUser);
teamRouter.delete('/:id', deleteUser);

module.exports = teamRouter;