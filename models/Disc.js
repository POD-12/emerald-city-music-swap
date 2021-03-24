// const mongoose = require ('mongoose');
// const { Schema } = mongoose;

// const discSchema = new Schema({
//     discDatePosted: {
//         type: Date,
//         default: Date.now
//     },
//     discAlbumName:  {
//         type: String,
//         maxlength: 50,
//         required: true
//     },
//     discReleaseYear:  {
//         type: Number,
//         minlength: 4,
//         maxlength: 4,
//         required: true
//     },
//     discType: {
//         type: String, 
//         enum: [
//             "Standard CD",
//             "CD-R",
//             "CD-RW",
//             "UNKOWN",
//             "OTHER"
//         ],
//         required: true
//     },
//     discArtist: {
//         type: String,
//         maxlength: 50,
//         required: true
//     },
//     discGenre: {
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
//     discCondition: {
//         type: String,
//         enum : [
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
//     discComments: [{ 
//         body: String,
//         maxlength: 250,
//         date: Date 
//     }],
//     discPosterContact: {
//         type: String,
//         maxlength: 50,
//         required: true
//     }
// });

// const Disc = mongoose.model("Disc", discSchema);
// module.exports = Disc