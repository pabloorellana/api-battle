'use strict';

const router = require('express').Router(),
    roomsController = require('../controllers/rooms.js');

router.post('/',
	roomsController.save
);

router.get('/',
	roomsController.getAll
);

router.get('/:roomId',
	roomsController.getOne
);

router.put('/:roomId',
	roomsController.update
);

router.delete('/:roomId',
	roomsController.remove
);

module.exports = router;