const express = require('express');
const {pool} = require('./db');


const {getUsers} = require('./userController');
const router = express.Router();

router.get('/', getUsers);
module.exports = router;


