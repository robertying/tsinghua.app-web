import { totp } from "@otplib/preset-default-async";

totp.options = {
  ...totp.options,
  algorithm: "sha256" as any,
  step: 15 * 60,
};

export default totp;
