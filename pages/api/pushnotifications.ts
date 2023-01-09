import type { NextApiRequest, NextApiResponse } from "next";
import { Expo, ExpoPushMessage } from "expo-server-sdk";

const expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

export default async function handlePushNotifications(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { payload, token } = req.body;
  if (!payload || !token) {
    return res.status(400).end();
  }

  if (payload.version !== 1) {
    return res.status(400).send("Unsupported payload version");
  }
  if (
    !Array.isArray(payload.notices) ||
    !Array.isArray(payload.assignments) ||
    !Array.isArray(payload.files) ||
    !Array.isArray(payload.grades)
  ) {
    return res.status(400).send("Invalid payload");
  }

  const expoToken = `ExponentPushToken[${token}]`;
  if (!Expo.isExpoPushToken(expoToken)) {
    return res.status(400).send("Invalid Expo push token");
  }

  const messages: ExpoPushMessage[] = [];
  for (const notice of payload.notices) {
    messages.push({
      to: expoToken,
      title: "新通知",
      subtitle: notice.courseName,
      body: notice.title,
      data: notice,
    });
  }
  for (const assignment of payload.assignments) {
    messages.push({
      to: expoToken,
      title: "新作业",
      subtitle: assignment.courseName,
      body: assignment.title,
      data: assignment,
    });
  }
  for (const file of payload.files) {
    messages.push({
      to: expoToken,
      title: "新文件",
      subtitle: file.courseName,
      body: file.title,
      data: file,
    });
  }
  for (const grade of payload.grades) {
    messages.push({
      to: expoToken,
      title: "成绩更新",
      subtitle: grade.courseName,
      body: grade.title,
      data: grade,
    });
  }

  const chunks = expo.chunkPushNotifications(messages);

  const results = await Promise.allSettled(
    chunks.map((chunk) => expo.sendPushNotificationsAsync(chunk))
  );
  if (results.every((result) => result.status === "rejected")) {
    return res.status(500).send("Failed to send push notifications");
  }

  return res.status(200).end();
}
