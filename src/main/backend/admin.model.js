var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true, dropDups: true }
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('admin', AdminSchema);