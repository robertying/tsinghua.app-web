import { createElement, Fragment } from "react";
import unified from "unified";
import markdown from "remark-parse";
import externalLinks from "remark-external-links";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import stringify from "rehype-stringify";
import sanitize from "rehype-sanitize";
import rehype2react from "rehype-react";
import MyImage from "components/Image";

export const markdownToHtml = async (markdownString: string) => {
  const file = await unified()
    .use(markdown)
    .use(externalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(stringify)
    .use(sanitize)
    .process(markdownString);
  return file.toString();
};

export const markdownToReact = async (markdownString: string) => {
  const file = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehype2react, {
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
    })
    .use(sanitize)
    .process(markdownString);

  return file.result as React.ReactElement;
};
