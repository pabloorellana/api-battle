'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name: { type: String, unique: true, required: true },
    size: { type: Number, default: 10 },
    ships: { type: Number, default: 10 }    
});

module.exports = mongoose.model('Room', RoomSchema);
