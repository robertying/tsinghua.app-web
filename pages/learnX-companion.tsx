import "@primer/css/dist/markdown.css";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Container } from "@mui/material";
import axios from "axios";
import { markdownToHtml } from "lib/markdown";

interface LearnXCompanionProps {
  content: string;
}

const LearnXCompanion: React.FC<
  React.PropsWithChildren<LearnXCompanionProps>
> = ({ content }) => {
  return (
    <>
      <NextSeo
        title="learnX Companion - 清华大学网络学堂 App 助手"
        description="清华大学网络学堂 App 助手，为 learnX 提供个性化的推送通知支持。"
      />
      <Container
        sx={{
          py: 8,
          '& img[alt~="screenshot"]': {
            maxWidth: "100%",
            height: {
              xs: "auto",
              sm: "auto",
            },
            width: {
              xs: "auto",
              sm: "auto",
            },
          },
        }}
        maxWidth="sm"
      >
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </>
  );
};

export default LearnXCompanion;

export const getStaticProps: GetStaticProps<
  LearnXCompanionProps
> = async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/robertying/learnX-companion/main/README.md"
  );
  const md = response.data as string;

  const html = await markdownToHtml(md);

  const content = html
    .replace(
      /(src|href)="(?!https:|http:|#)(.*?)"/gi,
      `$1="https://cdn.jsdelivr.net/gh/robertying/learnX-companion@main/$2"`
    )
    .replace(/href="#(.*?)"/gi, `href="#user-content-$1"`);

  return {
    props: {
      content,
    },
    revalidate: 24 * 60 * 60, // 24h
  };
};
