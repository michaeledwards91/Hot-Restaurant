var keys = require('./twilioKeys.js');
//require the Twilio module and create a REST client
var client = require('twilio')(keys.accountSID, keys.authToken);


var phoneClient = function(number) {
    client.sendMessage({

    to:number, // Any number Twilio can deliver to
    from: '+18329817927', // A number you bought from Twilio and can use for outbound communication
    body: "Your reservation is ready!" // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});
}

module.exports = phoneClient;