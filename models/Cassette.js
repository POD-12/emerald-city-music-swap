import mongoose from 'mongoose';
const { Schema } = mongoose;

const cassetteSchema = new Schema({
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
    tapeType: {
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

module.exports = Cassette = mongoose.model("cassette", cassetteSchema);