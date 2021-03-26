const mongoose = require("mongoose");
const db = require("../models");


//When online database is established, use seeder.connect(process.env.MONGODB_URI || "mongodb://localhost/hipsterapp") 
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hipsterapp"
);

const userSeed = [
  {
    name: "Gil Evans",
    email: "gilevans@hotmail.com",
    password: "password",
    date: new Date(Date.now())
  },
  {
    name: "Elwood Blues",
    email: "elwood.blues@gmail.com",
    password: "password",
    date: new Date(Date.now()),
  },
  {
    name: "George Clinton",
    email: "george.clinton@yahoo.com",
    password: "password",
    date: new Date(Date.now()),
  }
];


const recordSeed = [
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Kind of Blue",
    recordReleaseYear: "1959",
    recordSize: "12in",
    recordSpeed: "78 RPM",
    recordArtist: "Miles Davis",
    recordGenre: "Jazz",
    recordCondition: "Mint",
    recordComments: "A great jazz classic and the birth of cool.",
    recordPosterContact: "gilevans@hotmail.com",
    // image:"" 
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Sketches of Spain",
    recordReleaseYear: "1960",
    recordSize: "10in",
    recordSpeed: "45 RPM",
    recordArtist: "Miles Davis",
    recordGenre: "Jazz",
    recordCondition: "Very Good",
    recordComments: "An exemplary Third Stream jazz interpreation of Concierto e Aranjuez.",
    recordPosterContact: "gilevans@hotmail.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Mannish Boy",
    recordReleaseYear: "1955",
    recordSize: "7in",
    recordSpeed: "8⅓ RPM",
    recordArtist: "Muddy Waters",
    recordGenre: "Blues",
    recordCondition: "Good",
    recordComments: "This is the one-song/single release. The condition isn't great, but it plays ith minimal issues.",
    recordPosterContact: "elwood.blues@gmail.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Ray Charles",
    recordReleaseYear: "1955",
    recordSize: "12in",
    recordSpeed: "78 RPM",
    recordArtist: "Ray Charles",
    recordGenre: "Soul",
    recordCondition: "Very Good - Plus",
    recordComments: "Ray's debut album. Two sides of great music.",
    recordPosterContact: "elwood.blues@gmail.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "You Got What I Need",
    recordReleaseYear: "1968",
    recordSize: "10in",
    recordSpeed: "33⅓ RPM",
    recordArtist: "Freddie Scott",
    recordGenre: "Rythm & Blues",
    recordCondition: "Mint",
    recordComments: "Single release. Still in the plastic.",
    recordPosterContact: "elwood.blues@gmail.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Getting Ready...",
    recordReleaseYear: "1971",
    recordSize: "12in",
    recordSpeed: "78",
    recordArtist: "Freddie King",
    recordGenre: "Blues",
    recordCondition: "Very Good",
    recordComments: "Great album if your a fan of Freddie King.",
    recordPosterContact: "elwood.blues@gmail.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Fire",
    recordReleaseYear: "1974",
    recordSize: "10in",
    recordSpeed: "45 RPM",
    recordArtist: "The Ohio Players",
    recordGenre: "Funk",
    recordCondition: "Fair",
    recordComments: "Record skips at the bridge on the first verse, other than that it plays fine.",
    recordPosterContact: "george.clinton@yahoo.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Lo Qué Pida de Gente",
    recordReleaseYear: "1984",
    recordSize: "12in",
    recordSpeed: "78 RPM",
    recordArtist: "Fania All Stars",
    recordGenre: "Salsa",
    recordCondition: "Mint",
    recordComments: "Perfect condition, still in the plastic.",
    recordPosterContact: "george.clinton@yahoo.com",
    // image:""
  },
  {
    recordDatePosted: new Date(Date.now()),
    recordAlbumName: "Mothership Connection",
    recordReleaseYear: "1975",
    recordSize: "12in",
    recordSpeed: "78 RPM",
    recordArtist: "Parliament",
    recordGenre: "Funk",
    recordCondition: "Near Mint",
    recordComments: "Its been played a few times, but still basically new.",
    recordPosterContact: "george.clinton@yahoo.com",
    // image:""
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Record
  .remove({})
  .then(() => db.Record.collection.insertMany(recordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });