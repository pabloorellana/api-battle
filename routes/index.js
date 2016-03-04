'use strict';

const router = require('express').Router();

router.use('/players', require('./players.js'));
router.use('/rooms', require('./rooms.js'));
//router.use('/boards', require('./boards.js'));

module.exports = router;