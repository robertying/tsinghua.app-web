import unified from "unified";
import markdown from "remark-parse";
import externalLinks from "remark-external-links";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import stringify from "rehype-stringify";
import sanitize from "rehype-sanitize";

export const markdownToHtml = async (markdownString: string) => {
  const result = await unified()
    .use(markdown)
    .use(externalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(stringify)
    .use(sanitize)
    .process(markdownString);
  return result.toString();
};
