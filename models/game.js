'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const GameSchema = new Schema({
    roomId: { type: Object },
    players: { type: Array },
    date: { type: Date, default: new Date(), required: false },    
});

module.exports = mongoose.model('Game', GameSchema);
