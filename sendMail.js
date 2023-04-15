const nodemailer = require("nodemailer");
const sendMail = async(req,res)=>{

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'veer2238rajput@gmail.com',
            pass: 'jeasqtbfommzmxya'
        },
      });

      let info = await transporter.sendMail({
        from: 'veer2238rajput@gmail.com', // sender address
        to: "sonu2238rajput@gmail.com", // list of receivers
        cc:"himasnhu0409agraval@gmail.com",
        subject: "thanks for registration", // Subject line
        text: "Hello world?", // plain text body
        html: "<h1 style=color:green>welcome to our website</h1><br><img src=https://m.media-amazon.com/images/I/31+5KMLU7iL._MCnd_AC_.jpg>", // html body
      });

      console.log("Message sent: %s", info.messageId);

    res.send('sending mail')
}

module.exports =sendMail;