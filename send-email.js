const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // Host GoDaddy
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_SENDER_PASSWORD,
  },
});

const currentDate = new Date();

const addZero = (num) => (num < 10 ? `0${num}` : num);

const formattedDate = `${addZero(currentDate.getDate())}/${addZero(
  currentDate.getMonth() + 1
)}/${currentDate.getFullYear()}`;

const emailContentHTML = `<h1>Email content HTML - ${formattedDate}</h1>`;

const mailOptions = {
  from: process.env.EMAIL_SENDER,
  to: process.env.EMAIL_RECEIVER,
  subject: "Test Node Email",
  html: emailContentHTML,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error("Error sending the email:", error);
  }
  console.log("Email sent successfully:", info.response);
});
