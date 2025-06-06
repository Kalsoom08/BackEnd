const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const htmlPath = path.join(__dirname, 'emailTemplate.html')
const htmlContent = fs.readFileSync(htmlPath, 'utf-8')


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    auth: {
        user :'kalsoomyousafzai20@gmail.com',
        pass : "mgxc xtxq omfc hjwf"
    }
})

const mailOptions = {
  from: "kalsoomyousafzai20@gmail.com",
  to: "yousafzaiiklsm@gmail.com",
  subject: "HTML Email with Nodemailer",
  text : " HTML text from Nodemailer",
  html: htmlContent,
};

transporter.sendMail(mailOptions,(err, info)=>{
    if(err){
        console.log(err);
    }else{
        console.log(info.response);
    }
})
