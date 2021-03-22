import isEmail from "validator/lib/isEmail";

export const validateEmail = (email: string) => {
  return (
    isEmail(email) &&
    (email.endsWith("@tsinghua.edu.cn") ||
      email.endsWith(".tsinghua.edu.cn") ||
      email.endsWith("@tsinghua.org.cn"))
  );
};
