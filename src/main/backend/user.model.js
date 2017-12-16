var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true, dropDups: true }
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    phone: String,
    sex: String,
    russian: Boolean,
    english: Boolean,
    romanian: Boolean,
    hebrew: Boolean,
    french: Boolean,
    bot: {
        type: Number,
        unique: true
    }
});

module.exports = mongoose.model('user', UserSchema);