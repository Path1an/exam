const express = require('express');
const{pool} = require('./db');


const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('./userController');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;


