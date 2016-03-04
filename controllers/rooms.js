'use strict';

const co = require('co'),
    Rooms = require('../models/rooms.js');

function getAll (req, res, next) {
    co(function * () {
        let rooms = yield Rooms.find({});
        res.send(rooms);
    }).catch(next);
};

function getOne (req, res, next) {
    co(function * () {
        const roomId = req.params.roomId;
        const room = yield Rooms.findOne({ _id: roomId });
        
        if (!room) {
           return res.status(404).send('Room Not Found'); 
        }
        
        res.send(room);
    }).catch(next);
};

function save (req, res, next) {
    co(function * () {
        const room = yield Rooms.create(req.body);
        res.send(room);        
    }).catch(next);
};

function update (req, res, next) {
    co(function * () {
        const roomId = req.params.roomId;
        const room = yield Rooms.findByIdAndUpdate(roomId, req.body, { new: true });
        
        if (!room) {
           return res.status(404).send('Room Not Found'); 
        }
        
        res.send(room);
    }).catch(next);
};

function remove (req, res, next) {
    co(function * () {
        const roomId = req.params.roomId;
        const room = yield Rooms.findByIdAndRemove(roomId);
        
        if (!room) {
           return res.status(404).send('Room Not Found'); 
        }
        
        res.send(room);
    }).catch(next);
};


module.exports = { getAll, getOne, save, update, remove };
