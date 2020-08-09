// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require('path')
var db = require("./models")

var PORT = process.env.PORT || 8080;

// Initialize Express
var app = express();

// Express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname+ "/app/public")));

// require routes
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/theDailyBuzz";

// Connect to mongoDB with mongoose
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

db.Library.create({ name: "Daily Buzz })
  .then(function(dbLibrary) {
    // If saved successfully, print the new Library document to the console
    console.log(dbLibrary);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  });











// app listening on specified PORT
app.listen(PORT, function() {
    console.log("App listening on port 8080!");
});