const mongoose = require ('mongoose');
const { Schema } = mongoose;

const chartSchema = new Schema({
    chartDatePosted: {
        type: Date,
        default: Date.now
    },
    chartTitle: {
        type: String,
        maxlength: 50,
        required: true
    },
    chartReleaseYear: {
        type: Number,
        minlength: 4,
        maxlength: 4,
        required: true
    },
    chartType: {
        type: String,
        enum: [
            "Music Book",
            "Sheet Music"
        ],
        required: true
    },
    chartPages: {
        type: Number,
        min: 1,
        minlength: 4,
        maxlength: 4,
        required: true
    },
    chartComposer: {
        type: String,
        maxlength: 50,
        required: true
    },
    chartArranger: {
        type: String,
        maxlength: 50,
        required: true
    },
    chartParts: {
        type: Number,
        min: 1,
        maxlength: 3,
        required: true
    },
    chartCleff: {
        type: String,
        enum: [
            "Treble",
            "Bass",
            "Tabs",
            "Multi"
        ],
        required: true
    },
    chartInstrumentKey: {
        type: String,
        enum: [
            "A",
            "B♭",
            "C",
            "D",
            "E♭",
            "F",
            "G",
            "OTHER",
            "MULTI"
        ],
        required: true
    },
    chartIntendedInstrument: {
        type: String,
        enum: [
            "MULTI-INSTRUMENT",
            "UNSPECIFIED",
            "Accordion",
            "Bagpipe",
            "Bass - Guitar",
            "Bass - Upright",
            "Baritone Horn",
            "Bugle",
            "Cello",
            "Clarinet",
            "Clarinet - Alto",
            "Clarinet - Bass",
            "Coronet",
            "Flute",
            "Flute - Bass",
            "Flute - Contra",
            "Flute - Contrabass",
            "Fluglehorn",
            "French Horn",
            "Guitar",
            "Harp",
            "Harmonica",
            "Oboe",
            "Percussion - Bass Drum",
            "Percussion - Cymbal",
            "Percussion - Drum Kit",
            "Percussion - Snare Drum",
            "Percussion - Timpani",
            "Percussion - Tom Tom",
            "Percussion - Vibrophone",
            "Percussion - Xylophone",
            "Percussion - Other",
            "Piano",
            "Piccolo",
            "Recorder",
            "Saxophone - Alto",
            "Saxophone - Baritone",
            "Saxophone - Bass",
            "Saxophone - Contrabass",
            "Saxophone - C Melody",
            "Saxophone - Soprano",
            "Soosaphone",
            "Trombone",
            "Trumpet",
            "Tuba",
            "Viola",
            "Violin",
            "Voice - Alto",
            "Voice - Baritone",
            "Voice - Bass",
            "Voice - Soprano",
            "Voice - Tenor",
            "Voice - Other",
            "OTHER"
        ],
        required: true
    },
    chartGenre: {
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
    chartCondition: {
        type: String,
        enum: [
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
    chartComments: [{
        body: String,
        maxlength: 250,
        date: Date
    }],
});

const Chart = mongoose.model("Chart", chartSchema);
module.exports = Chart