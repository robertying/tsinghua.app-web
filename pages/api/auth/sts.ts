import { NextApiRequest, NextApiResponse } from "next";
import { v1 as uuidv1 } from "uuid";
import { authenticate } from "lib/auth";
const OSS = require("ali-oss");

const { STS } = OSS;

const generatePolicy = (tempFolder: string) => ({
  Version: "1",
  Statement: [
    {
      Effect: "Allow",
      Action: ["oss:PutObject"],
      Resource: [
        `acs:oss:*:*:${process.env.NEXT_PUBLIC_OSS_BUCKET}/avatars/${tempFolder}/*`,
        `acs:oss:*:*:${process.env.NEXT_PUBLIC_OSS_BUCKET}/images/${tempFolder}/*`,
      ],
    },
  ],
});

const client = new STS({
  accessKeyId: process.env.OSS_KEY_ID!,
  accessKeySecret: process.env.OSS_KEY_SECRET!,
});

export default async function handleSts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = await authenticate(req, res);
  if (!auth) {
    return res.end();
  }

  return new Promise<void>((resolve, reject) => {
    const tempFolder = uuidv1();
    const policy = generatePolicy(tempFolder);

    client
      .assumeRole(process.env.OSS_ROLE_ARN!, policy, 15 * 60 /* 15m */)
      .then((result: any) => {
        res.status(200).json({
          AccessKeyId: result.credentials.AccessKeyId,
          AccessKeySecret: result.credentials.AccessKeySecret,
          SecurityToken: result.credentials.SecurityToken,
          Expiration: result.credentials.Expiration,
          TempFolder: tempFolder,
        });
        return resolve();
      })
      .catch((err: Error) => {
        console.error(err);
        res.status(500).end();
        return reject();
      });
  });
}
