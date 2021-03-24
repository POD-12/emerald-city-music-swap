// const mongoose = require ('mongoose');
// const { Schema } = mongoose;

// const tapeSchema = new Schema({
//     tapeDatePosted: {
//         type: Date,
//         default: Date.now
//     },
//     tapeAlbumName:  {
//         type: String,
//         maxlength: 50,
//         required: true
//     },
//     tapeReleaseYear:  {
//         type: Number,
//         minlength: 4,
//         maxlength: 4,
//         required: true
//     },
//     tapeType: {
//         type: String, 
//         enum: [
//             "Cassette - Type 1",
//             "Cassette - Type 2",
//             "Cassete - Type 3",
//             "Cassete - Type 4",
//             "8-Track",
//             "UNKOWN",
//             "OTHER"
//         ],
//         required: true
//     },
//     tapeArtist: {
//         type: String,
//         maxlength: 50,
//         required: true
//     },
//     tapeGenre: {
//         type: String,
//         enum: [
//             "Alternative",
//             "Blues",
//             "Children's",
//             "Classical",
//             "Comedy",
//             "Country",
//             "Dance",
//             "Disco",
//             "Electronic",
//             "Folk",
//             "Gospel",
//             "Hip-Hop/Rap",
//             "Holiday",
//             "Indie",
//             "Industrial",
//             "Jazz",
//             "Karaoke",
//             "Latin",
//             "Metal",
//             "Motown",
//             "New Age",
//             "Oldies",
//             "Opera",
//             "Pop",
//             "R&B",
//             "Reggae",
//             "Religious",
//             "Rock",
//             "Soul",
//             "World",
//             "OTHER"
//         ],
//         required: true
//     },
//     tapeCondition: {
//         type: String,
//         enum: [
//             "Mint", 
//             "Near Mint", 
//             "Excellent", 
//             "Very Good Plus",
//             "Very Good",
//             "Good",
//             "Fair",
//             "Poor"
//         ],
//         required: true
//     },
//     tapeComments: [{ 
//         body: String,
//         maxlength: 250,
//         date: Date 
//     }],
//     tapePosterContact: {
//         type: String,
//         maxlength: 50,
//         required: true
//     }
// });

// const Tape = mongoose.model("Tape", tapeSchema);
// module.exports = Tape