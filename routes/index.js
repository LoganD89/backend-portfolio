const express = require("express");
const MailRouter = express.Router();
const nodemailer = require('nodemailer')
const creds = require('../config/config');

// Mailer routes for contact form
MailRouter.route('/').post((req, res) => {
  let data = req.body

  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });

  let mailOptions = {
    from: data.email,
    to: 'logandempsey199@gmail.com',
    subject: 'Message from Contact Form',
    html: `<p>Message from: ${data.name}</p>
          <p>Reply to: ${data.email}</p>
          <p>Message: ${data.message}</p>`
  }

  smtpTransport.sendMail(mailOptions,
    (error, response)=> {
      if(error) {
        res.send("Mailer Error in sendMail call: " + error)
      } else {
        res.send('Success: ' + response)
      }
      smtpTransport.close()
    })
})

module.exports = MailRouter
