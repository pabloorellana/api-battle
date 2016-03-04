'use strict';

const router = require('express').Router(),
    playersController = require('../controllers/players.js');

router.post('/',
	playersController.save
);

router.get('/',
	playersController.getAll
);

router.get('/:playerId',
	playersController.getOne
);

router.put('/:playerId',
	playersController.update
);

module.exports = router;