import { createElement, Fragment } from "react";
import unified from "unified";
import markdown from "remark-parse";
import math from "remark-math";
import breaks from "remark-breaks";
import externalLinks from "remark-external-links";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import katex from "rehype-katex";
import stringify from "rehype-stringify";
import sanitize from "rehype-sanitize";
import rehype2react from "rehype-react";
import merge from "deepmerge";
import MyImage from "components/Image";
const githubSanitizeSchema = require("hast-util-sanitize/lib/github");

export const markdownToHtml = async (markdownString: string) => {
  const file = await unified()
    .use(markdown)
    .use(breaks)
    .use(externalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(stringify)
    .use(sanitize)
    .process(markdownString);
  return file.toString();
};

const katexSanitizeSchema = merge(githubSanitizeSchema, {
  tagNames: [
    "math",
    "annotation",
    "semantics",
    "mtext",
    "mn",
    "mo",
    "mi",
    "mspace",
    "mover",
    "munder",
    "munderover",
    "msup",
    "msub",
    "msubsup",
    "mfrac",
    "mroot",
    "msqrt",
    "mtable",
    "mtr",
    "mtd",
    "mlabeledtr",
    "mrow",
    "menclose",
    "mstyle",
    "mpadded",
    "mphantom",
    "mglyph",
  ],
  attributes: {
    div: [["className", "math", "math-display"]] as any,
    span: ["className", "style", "aria-hidden"],
    math: ["xmlns", "display"],
    annotation: ["encoding"],
  },
});

const rehype2reactOptions = {
  createElement: createElement,
  Fragment: Fragment,
  components: {
    a: (props: React.HTMLProps<HTMLAnchorElement>) => (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ),
    img: (
      props: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >
    ) => (
      <MyImage
        css={{
          margin: "8px auto",
        }}
        {...props}
      />
    ),
  },
};

export const markdownToReact = async (markdownString: string) => {
  const file = await unified()
    .use(markdown)
    .use(math)
    .use(breaks)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(katex)
    .use(rehype2react, rehype2reactOptions)
    .use(sanitize, katexSanitizeSchema)
    .process(markdownString);

  return file.result as React.ReactElement;
};
