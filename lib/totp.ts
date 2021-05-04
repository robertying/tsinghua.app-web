import { totp } from "@otplib/preset-default-async";

totp.options = {
  ...totp.options,
  algorithm: "sha256" as any,
  step: 30 * 60, // 30m
  window: 1,
};

export default totp;
