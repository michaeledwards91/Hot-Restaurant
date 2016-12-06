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
    console.log(res);
    res.json(newTable);
});

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});


app.post("/api/newtable", function(req, res) {
    var customerEmail = req.body.email;

    // Sending Emails
    // =======================================================
    var router = express.Router();
    app.use('/sayHello', router);
    router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

    function handleSayHello(req, res) {

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'hot.restaurant@gmail.com', // Your email id
                pass: 'hot12345' // Your password
            }
        });
        var text = 'Hello world from';
        var mailOptions = {
            from: 'hector1',
            to: customerEmail,
            subject: 'Your Reservation is Ready',
            text: 'Your Reservation is Ready. /n/n-Hot-Restaurant'
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);

            } else {
                console.log('Message sent: ' + info.response);

            };
        });
    }
    handleSayHello();
});

