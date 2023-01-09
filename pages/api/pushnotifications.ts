import type { NextApiRequest, NextApiResponse } from "next";
import { Expo, ExpoPushMessage } from "expo-server-sdk";

const expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

export default async function handlePushNotifications(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { payload, tokens } = req.body;
  if (!payload || !tokens) {
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
  if (
    payload.notices.length === 0 &&
    payload.assignments.length === 0 &&
    payload.grades.length === 0 &&
    payload.files.length === 0
  ) {
    return res.status(400).send("Empty payload");
  }

  if (!Array.isArray(tokens)) {
    return res.status(400).send("Invalid tokens");
  }
  if (tokens.length === 0) {
    return res.status(400).send("Empty tokens");
  }

  const expoTokens: string[] = [];
  for (const token of tokens) {
    const expoToken = `ExponentPushToken[${token}]`;
    if (!Expo.isExpoPushToken(expoToken)) {
      return res.status(400).send("Invalid Expo push token");
    }
    expoTokens.push(expoToken);
  }

  const messages: ExpoPushMessage[] = [];
  for (const notice of payload.notices) {
    messages.push({
      to: expoTokens,
      title: "新通知",
      subtitle: notice.courseName,
      body: notice.title,
      data: notice,
      _contentAvailable: true,
    } as any);
  }
  for (const assignment of payload.assignments) {
    messages.push({
      to: expoTokens,
      title: "新作业",
      subtitle: assignment.courseName,
      body: assignment.title,
      data: assignment,
      _contentAvailable: true,
    } as any);
  }
  for (const file of payload.files) {
    messages.push({
      to: expoTokens,
      title: "新文件",
      subtitle: file.courseName,
      body: file.title,
      data: file,
      _contentAvailable: true,
    } as any);
  }
  for (const grade of payload.grades) {
    messages.push({
      to: expoTokens,
      title: "成绩更新",
      subtitle: grade.courseName,
      body: grade.title,
      data: grade,
      _contentAvailable: true,
    } as any);
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
