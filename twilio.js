//require the Twilio module and create a REST client
var client = require('twilio')('accountSID', 'uthToken');


client.messages.create({ 
    to: "", 
    from: "+18329817927", 
    body: "Your reservation is ready!", 
}, function(err, message) { 
    console.log(message.sid); 
});

module.exports = Client;