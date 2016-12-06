// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var nodemailer = require('nodemailer');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Variables to hold tables and waitlist
var reservations = [];
var waitList = [];

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res) {
    //respond json of list of current 5 tables
    res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    //respond json list of waitlist tables
    res.json(waitList);
})

app.post("/api/newtable", function(req, res) {
    var newTable = req.body;
    if (reservations.length < 5) {
        newTable.status = "reservation";
        reservations.push(newTable);
    } else {
        newTable.status = "waitlist";
        waitList.push(newTable);
    }
    res.json(newTable);
});



app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});

