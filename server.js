require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

const passport = require("passport");

app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use("/api", require("./routes/api"));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hipsterapp")

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// io.on("connection", (socket) => {
//   console.log("new client connected");
//   socket.emit("connection", null);
// });