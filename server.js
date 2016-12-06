// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res) {
	res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res) {
	//respond json of list of current 5 tables
});

app.get("/api/waitlist", function(req, res) {
	//respond json list of waitlist tables
})

app.post("/api/newtable", function(req, res) {
	var newTable = req.body;
	console.log(newTable);
});


app.listen(PORT, function() {
	console.log("Server listening on port " + PORT);
})