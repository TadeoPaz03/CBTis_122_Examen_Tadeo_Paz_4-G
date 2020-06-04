const express = require('express');
let estatal = require('../controllers/pintorController.js');
//defino a un Router
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;
