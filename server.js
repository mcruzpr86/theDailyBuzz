// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require('path')

var PORT = 8080;

// Initialize Express
var app = express();

// Express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname+ "/app/public")));

// require routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/theDailyBuzz";

// Connect to mongoDB with mongoose
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// app listening on specified PORT
app.listen(PORT, function() {
    console.log("App listening on port " + PORT + "!");
});