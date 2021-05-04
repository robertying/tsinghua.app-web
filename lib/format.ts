import UaParser from "ua-parser-js";

export const getSemesterTextFromId = (
  semesterId: string,
  compact?: boolean
) => {
  const texts = semesterId.split("-");
  return compact
    ? `${texts?.[0]}-${texts?.[1]}\n${
        texts?.[2] === "1"
          ? "秋季学期"
          : texts?.[2] === "2"
          ? "春季学期"
          : "夏季学期"
      }`
    : `${texts?.[0]}-${texts?.[1]} 学年${
        texts?.[2] === "1"
          ? "秋季学期"
          : texts?.[2] === "2"
          ? "春季学期"
          : "夏季学期"
      }`;
};

export const getDeviceDescription = (ua: string) => {
  const parsed = new UaParser(ua);

  return (
    `${parsed.getBrowser().name} ${parsed.getBrowser().version}, ${
      parsed.getOS().name
    } ${parsed.getOS().version}` +
    (parsed.getDevice().vendor && parsed.getDevice().model
      ? `, ${parsed.getDevice().vendor} ${parsed.getDevice().model}`
      : "")
  );
};
