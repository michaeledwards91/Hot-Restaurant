var nodemailer = require('nodemailer');
var express = require('express');

var app = express();
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
var text = 'Hello world from' ;
var mailOptions = {
    from: 'hector1', 
    to: 'shvetacrane@gmail.com', 
    subject: 'Email Example', 
    text: 'text'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
       
    }else{
        console.log('Message sent: ' + info.response);
       
    };
});
}
handleSayHello();





