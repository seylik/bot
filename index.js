app.post('/webhook/', function (req, res) {
    messaging_events = req.body.entry[0].messaging
    for (i = 0; i < messaging_events.length; i++) {
        event = req.body.entry[0].messaging[i]
        sender = event.sender.id
        if (event.message && event.message.text) {
            text = event.message.text
            sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
        }
    }
    res.sendStatus(200)
})

var token = "<EAAB3xTiHDMEBAJUxxGxciLRAriXJg6vSoUI0VfViRMMzLYwF8pCJepsEy5NbS19lX1eZCW7h7zFC9WgscZBvwUXTFbhhVcZAk5H5xhX6FcXbt3f07vaKD4wl0V8pKLF32Lr7ZBIS2MVjzvxNjPTePHsZCwZAN5Q1ZCtpZAH9olKIXgZDZD>"

function sendTextMessage(sender, text) {
    messageData = {
        text:text
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}
