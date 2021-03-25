const mongoose = require('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
    recordDatePosted: {
        type: Date,
        default: Date.now
    },
    recordPosterId:
    {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    recordAlbumName: {
        type: String,
        maxlength: 50,
    },
    recordReleaseYear: {
        type: Number,
        minlength: 4,
        maxlength: 4,
    },
    recordSize: {
        type: String,
        maxlength: 50,
    },
    recordSpeed: {
        type: String,
        maxlength: 50,
    },
    recordArtist: {
        type: String,
        maxlength: 50,
    },
    recordGenre: {
        type: String,
        maxlength: 50,
    },
    recordCondition: {
        type: String,
        maxlength: 50,
    },
    recordComments: {
        type: String,
        maxlength: 250,
    },
    recordPosterContact: {
        type: String,
        maxlength: 50,
    },
    image:{type: String}
});

const Record = mongoose.model("Record", recordSchema);
module.exports = Record
