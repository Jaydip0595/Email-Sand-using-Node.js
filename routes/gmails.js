
let express = require('express');
var nodemailer = require('nodemailer');
let router = express.Router();

router.post("/",(req,res) =>{

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jaydipkhade9252@gmail.com',
      pass: 'plz open gmail-two stap verification-app password'
    }
  });
  
  var mailOptions = {
    from: 'jaydipkhade9252@gmail.com',
    to: 'divakarkesarkar2070@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi  Transaction Successfully Done'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.end(JSON.stringify({status:"failed",data:result}));
    }
    else
    {
        res.end(JSON.stringify({status:"success",data:info.response}))
    }
  })
})
module.exports = router;