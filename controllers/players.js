'use strict';

const co = require('co'),
    Players = require('../models/players.js');

function getAll (req, res, next) {
    co(function * () {
        let players = yield Players.find({});
        res.send(players);
    }).catch(next);
};

function getOne (req, res, next) {
    co(function * () {
        const playerId = req.params.playerId;
        const player = yield Players.findOne({ _id: playerId });
        
        if (!player) {
           return res.status(404).send('Player Not Found'); 
        }
        
        res.send(player);
    }).catch(next);
};

function save (req, res, next) {
    co(function * () {
        const player = yield Players.create(req.body);
        res.send(player);        
    }).catch(next);
};

function update (req, res, next) {
    co(function * () {
        const playerId = req.params.playerId;
        const player = yield Players.findByIdAndUpdate(playerId, req.body, { new: true });
        
        if (!player) {
           return res.status(404).send('Player Not Found'); 
        }
        
        res.send(player);
    }).catch(next);
};

module.exports = { getAll, getOne, save, update };
