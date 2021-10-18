import TinyOSS from "tiny-oss";
import axios from "axios";

let expirationTime: Date | null = null;
let oss: any | null = null;
let tempFolder: string | null = null;

export const getOSS = async () => {
  if (
    oss === null ||
    expirationTime === null ||
    tempFolder === null ||
    expirationTime.getTime() <= new Date().getTime()
  ) {
    const response = await axios.get("/api/auth/sts");
    const auth = response.data as any;
    expirationTime = new Date(auth.Expiration);
    tempFolder = auth.TempFolder;

    oss = new TinyOSS({
      region: process.env.NEXT_PUBLIC_OSS_REGION,
      accessKeyId: auth.AccessKeyId,
      accessKeySecret: auth.AccessKeySecret,
      stsToken: auth.SecurityToken,
      bucket: process.env.NEXT_PUBLIC_OSS_BUCKET,
      cname: false,
      endpoint: process.env.NEXT_PUBLIC_OSS_ENDPOINT,
      secure: true,
    });
    return { oss, tempFolder };
  } else {
    return { oss, tempFolder };
  }
};
