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

export const sendOtpEmail = async (to: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "你的星期四验证码",
    text: `你的星期四验证码是 ${otp}，验证码有效期 15 分钟。`,
    html: `
      <div>
        你的星期四验证码是 <span style="font-weight: bold; font-size: 32px;">${otp}</span>，验证码有效期 15 分钟。
      </div>
      <br>
      <div>
        如果你并未申请此验证码，请忽略本邮件。
      </div>
      `,
  });
};
