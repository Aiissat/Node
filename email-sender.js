var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'm.aiissatoudiallo@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'm.aiissatoudiallo@gmail.com',
  to: 'josuesmjr.mongan@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! This is a test.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});