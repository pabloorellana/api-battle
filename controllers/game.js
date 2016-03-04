'use strict';

const co = require('co'),
    Q = require('q'),
    Players = require('../models/players.js'),
    Games = require('../models/game.js');

function getAll (req, res, next) {
    co(function * () {
        let games = yield Games.find({});
        res.send(games);
    }).catch(next);
};

function getOne (req, res, next) {
    co(function * () {
        const gameId = req.params.roomId;
        const game = yield Games.findOne({ _id: gameId });
        
        if (!game) {
           return res.status(404).send('Match Not Found'); 
        }
        
        res.send(game);
    }).catch(next);
};

function save (req, res, next) {
    co(function * () {
        const room = yield Games.create(req.body);
        res.send(room);        
    }).catch(next);
};

function update (req, res, next) {
    co(function * () {
        const roomId = req.params.roomId;
        const room = yield Games.findByIdAndUpdate(roomId, req.body, { new: true });
        
        if (!room) {
           return res.status(404).send('Room Not Found'); 
        }
        
        res.send(room);
    }).catch(next);
};

function remove (req, res, next) {
    co(function * () {
        const roomId = req.params.roomId;
        const room = yield Games.findByIdAndRemove(roomId);
        
        if (!room) {
           return res.status(404).send('Room Not Found'); 
        }
        
        res.send(room);
    }).catch(next);
};

function addPlayer (req, res, next) {
    co(function * () {
        const roomId = req.params.roomId;
        const playerId = req.params.player;
        
        // TODO [03/04/2016] Refactor to use destructuring assignment
        const result = yield Q.all([Games.findOne({ _id: roomId}), Players.findOne({ _id: playerId})]);        
        const room = result[0];
        const player = result[1];
        
        if (!room) {
           return res.status(404).send('Room Not Found'); 
        }
        
        if (!player) {
           return res.status(404).send('Player Not Found'); 
        }
        
        const updatedRoom = yield room.addPlayer(player);
        
        res.send(updatedRoom);
    }).catch(next);
};

module.exports = { getAll, getOne, save, update };
