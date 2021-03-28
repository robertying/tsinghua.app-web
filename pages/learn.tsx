import { GetStaticProps } from "next";
import { Container } from "@material-ui/core";
import axios from "axios";
import { markdownToHtml } from "lib/markdown";

interface LearnProps {
  content: string;
}

const Learn: React.FC<LearnProps> = ({ content }) => {
  return (
    <Container
      sx={{
        py: 8,
        '& img[alt~="screenshot"]': {
          maxWidth: "100%",
          height: {
            xs: "auto",
            sm: 320,
          },
        },
      }}
      maxWidth="sm"
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default Learn;

export const getStaticProps: GetStaticProps<LearnProps> = async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/robertying/learnX/main/README.md"
  );
  const md = response.data as string;

  const html = await markdownToHtml(md);

  const content = html.replace(
    /(src|href)="(?!https:|http:)(.*?)"/gi,
    `$1="https://cdn.jsdelivr.net/gh/robertying/learnX@main/$2"`
  );

  return {
    props: {
      content,
    },
    revalidate: 1 * 60 * 60,
  };
};
