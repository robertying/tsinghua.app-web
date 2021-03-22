import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST!,
  port: parseInt(process.env.EMAIL_SERVER_PORT!, 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER!,
    pass: process.env.EMAIL_SERVER_PASS!,
  },
});

export const sendEmail = async (to: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "你的星期四验证码",
    text: `你的星期四验证码是 ${otp}，有效期 15 分钟。`,
    html: `你的星期四验证码是 <b>${otp}</b>，有效期 15 分钟。`,
  });
};
