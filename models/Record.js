const mongoose = require ('mongoose');
const { Schema } = mongoose;

const recordSchema = new Schema({
    recordDatePosted: {
        type: Date,
        default: Date.now
    },
    recordAlbumName:  {
        type: String,
        maxlength: 50,
        required: true
    },
    recordReleaseYear:  {
        type: Number,
        minlength: 4,
        maxlength: 4,
        required: true
    },
    recordSize: {
        type: String,
        enum: [
            "12in",
            "10in",
            "7in",
            "OTHER"
        ],
        required: true
    },
    recordSpeed: {
        type: String,
        enum: [
            "78 RPM",
            "45 RPM",
            "33⅓ RPM",
            "16⅔ RPM",
            "8⅓ RPM",
            "OTHER"
        ],
        required: true
    },
    recordArtist: {
        type: String,
        maxlength: 50,
        required: true
    },
    recordGenre: {
        type: String,
        enum: [
            "Alternative",
            "Blues",
            "Children's",
            "Classical",
            "Comedy",
            "Country",
            "Dance",
            "Disco",
            "Electronic",
            "Folk",
            "Gospel",
            "Hip-Hop/Rap",
            "Holiday",
            "Indie",
            "Industrial",
            "Jazz",
            "Karaoke",
            "Latin",
            "Metal",
            "Motown",
            "New Age",
            "Oldies",
            "Opera",
            "Pop",
            "R&B",
            "Reggae",
            "Religious",
            "Rock",
            "Soul",
            "World",
            "OTHER"
        ],
        required: true
    },
    recordCondition: {
        type: String,
        enum : [
            "Mint", 
            "Near Mint", 
            "Excellent", 
            "Very Good Plus",
            "Very Good",
            "Good",
            "Fair",
            "Poor"
        ],
        required: true
    },
    recordComments: [{ 
        body: String,
        maxlength: 250,
        date: Date 
    }],
    recordPosterContact: {
        type: String,
        maxlength: 50,
        required: true
    }
});

const Record = mongoose.model("Record", recordSchema);
module.exports = Record
