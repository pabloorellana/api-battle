'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name : { type: String, unique: true, required: true },
    email: { type: String, unique: true }
});

module.exports = mongoose.model('Player', PlayerSchema);
