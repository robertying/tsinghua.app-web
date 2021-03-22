import { NextApiRequest, NextApiResponse } from "next";
import totp from "lib/totp";
import { validateEmail } from "lib/validate";
import { sendEmail } from "lib/email";

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

  try {
    const otp = await totp.generate(email + process.env.AUTH_TOTP_SECRET!);

    await sendEmail(email, otp);
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }

  res.status(200).end();
}
