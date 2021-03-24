import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import totp from "lib/totp";
import { validateEmail } from "lib/validate";
import { sendOtpEmail } from "lib/email";

export default async function handleLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.body.email;
  if (!email) {
    return res.status(422).send("Missing user email");
  }
  if (!validateEmail(email)) {
    return res.status(422).send("Invalid user email");
  }
  const recaptcha = req.body.recaptcha;
  if (!recaptcha) {
    return res.status(422).send("Missing recaptcha token");
  }

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      undefined,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptcha,
        },
      }
    );
    const result = response.data;
    if (
      !(
        result.success &&
        result.hostname === process.env.HOSTNAME &&
        result.action === "login" &&
        result.score >= 0.5
      )
    ) {
      return res.status(403).send("Access denied");
    }
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  try {
    const otp = await totp.generate(email + process.env.AUTH_TOTP_SECRET!);

    await sendOtpEmail(email, otp);
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  res.status(200).end();
}
