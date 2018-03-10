var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    begin: Date,
    end: Date,
    phone: String,
    place: String,
    russian: Boolean,
    russianLevel: Number,
    hebrew: Boolean,
    hebrewLevel: Number,
    romanian: Boolean,
    romanianLevel: Number,
    english: Boolean,
    englishLevel: Number,
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }



});

module.exports = mongoose.model('familyHolliday', UserSchema);