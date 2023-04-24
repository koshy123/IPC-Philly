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
    };