const mongoose = require ('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
    album:  {
        type: String, 
        required: true
    },
    artist: {
        type: String, 
        required: true
    },
    release:  {
        type: String, 
        required: true
    },
    genre: {
        type: String, 
        required: true
    },
    recordSize: {
        type: String, 
        required: true
    },
    condition: {
        type: String, 
        required: true
    },
    comments: [{ 
        body: String, 
        date: Date 
    }],
    date: {
        type: Date,
        default: Date.now
    },
});
const Record = mongoose.model("Record", recordSchema);
module.exports = Record