const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    name: {
        type: String,
    },
    tier: {
        type: String
    },
    position: {
        type: String,
    },
    memo: {
        type: String,
        default: ''
    },
    created: {
        type: String
    }
})

const Match = mongoose.model('Match', matchSchema);

module.exports = { Match }