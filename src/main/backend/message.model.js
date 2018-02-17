var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    type: Number,
    beginDate: Date,
    endDate: Date,
    text: String,
    
    user: { type:  mongoose.Schema.Types.ObjectId, ref: 'user' }
    
});

module.exports = mongoose.model('message', MessageSchema);