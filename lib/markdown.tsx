import { createElement, Fragment } from "react";
import Link from "next/link";
import merge from "deepmerge";
import { unified } from "unified";
import markdown from "remark-parse";
import math from "remark-math";
import breaks from "remark-breaks";
import externalLinks from "remark-external-links";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import slug from "rehype-slug";
import katex from "rehype-katex";
import stringify from "rehype-stringify";
import sanitize from "rehype-sanitize";
import rehype2react from "rehype-react";
import MyImage from "components/Image";
import { isRelativeUrl } from "./validate";
import { defaultSchema, Schema } from "hast-util-sanitize";

export const markdownToHtml = async (markdownString: string) => {
  const file = await unified()
    .use(markdown)
    .use(externalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(raw)
    .use(stringify)
    .use(sanitize)
    .process(markdownString);
  return file.toString();
};

const katexSanitizeSchema: Schema = merge(defaultSchema, {
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
    div: [["className", "math", "math-display"]],
    span: ["className", "style", "aria-hidden"],
    math: ["xmlns", "display"],
    annotation: ["encoding"],
  },
});

/* eslint-disable react/display-name */
const getRehypeToReactOptions = (preview?: boolean) => ({
  createElement: createElement,
  Fragment: Fragment,
  components: {
    a: (props: React.HTMLProps<HTMLAnchorElement>) =>
      !preview && isRelativeUrl(props.href ?? "") ? (
        <Link {...props} href={props.href ?? ""} ref={undefined}>
          {props.children}
        </Link>
      ) : (
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
});
/* eslint-enable react/display-name */

export const markdownToReact = async (
  markdownString: string,
  preview?: boolean
) => {
  const file = await unified()
    .use(markdown)
    .use(math)
    .use(breaks)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(katex as any)
    .use(rehype2react, getRehypeToReactOptions(preview))
    .use(sanitize, katexSanitizeSchema as any)
    .process(markdownString);

  return file.result as React.ReactElement;
};
