const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_too, sent_from, reply_to) => {
    const transporter = nodemailer.createTransport({
        host: "koshy.jeffrey57@gmail.com", //replace with your email provider
        port: 587,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
      })

      const options = {
        from: sent_from,
        to: sent_to,
        replyTo: reply_to,
        subject: subject,
        html: message
      }
      // send email
      transporter.sendMail(options, function(err, info){
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
      })
      

    };


    module.export = sendEmail;
    