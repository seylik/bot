'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAB3xTiHDMEBAJUxxGxciLRAriXJg6vSoUI0VfViRMMzLYwF8pCJepsEy5NbS19lX1eZCW7h7zFC9WgscZBvwUXTFbhhVcZAk5H5xhX6FcXbt3f07vaKD4wl0V8pKLF32Lr7ZBIS2MVjzvxNjPTePHsZCwZAN5Q1ZCtpZAH9olKIXgZDZD',
  verify: 'verify_me'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
