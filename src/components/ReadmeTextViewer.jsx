import ReactMarkdown from "react-markdown";
import { Link } from "react-scroll";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import "github-markdown-css";

const ReadmeTextViewer = ({ markdownText }) => {
  const reactMarkdown = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // @ts-ignore
        img: ({ src, alt, width, ...props }) => (
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "80%",
              width: width,
            }}
          />
        ),
        code({ className, children, node, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          if (match) {
            return (
              <SyntaxHighlighter
                style={monokai}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          }
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // @ts-ignore
        h2: ({ node, ...props }) => {
          var title = "";

          if (node.toString().includes("BackofficeCreationFieldExclude")) {
            console.log(node);
          }

          if (
            // @ts-ignore
            node.children[0].tagName &&
            // @ts-ignore
            node.children[0].tagName === "strong"
          ) {
            // @ts-ignore
            title = node.children[0].children[0].value;
          } else {
            // @ts-ignore
            title = node.children[0].value;
          }

          return (
            <h2 id={title.toLowerCase().replace(/ /g, "-")}>
              <b>{title}</b>
            </h2>
          );
        },
        // @ts-ignore
        h3: ({ node, ...props }) => {
          var title = "";

          if (node.toString().includes("BackofficeCreationFieldExclude")) {
            console.log(node);
          }
          if (
            // @ts-ignore
            node.children[0].tagName &&
            // @ts-ignore
            node.children[0].tagName === "strong"
          ) {
            // @ts-ignore
            title = node.children[0].children[0].value;
          } else {
            // @ts-ignore
            title = node.children[0].value;
          }

          return (
            <h3 id={title.toLowerCase().replace(/ /g, "-")}>
              <b>{title}</b>
            </h3>
          );
        },
        h4: ({ children }) => {
          return <p>{children}</p>;
        },
        h5: ({ children }) => {
          return <p>{children}</p>;
        },
        a: ({ href, children }) => {
          if (href && href.startsWith("#")) {
            return (
              <Link
                to={href.substring(1)}
                duration={500}
                smooth={true}
                spy={true}
                containerId="markdown-body"
              >
                {children}
              </Link>
            );
          }
          return <a href={href}>{children}</a>;
        },
        table: ({ children }) => {
          return (
            <TableContainer>
              <table>{children}</table>
            </TableContainer>
          );
        },
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
  return <MarkdownBody id="markdown-body">{reactMarkdown}</MarkdownBody>;
};

export default ReadmeTextViewer;

const MarkdownBody = styled.div`
  padding: 20px;
  overflow: scroll;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (max-width: 600px) {
    margin-bottom: 3rem;
    word-wrap: break-word;
    text-align: start;

    font-size: 90%;
    word-break: break-word;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }

  ul {
    @media screen and (max-width: 600px) {
      padding-left: 20px;
    }
  }

  pre {
    div {
      background: inherit !important;
    }

    @media screen and (max-width: 600px) {
      max-width: 100%;
      overflow: scroll;
    }
  }
`;

const TableContainer = styled.div`
  @media screen and (max-width: 600px) {
    max-width: 100%;
    overflow: scroll;
  }

  table {
    margin-top: 1rem;
    margin-left: 20px;

    width: calc(100% - 20px);
    border: 1px solid white;
    border-collapse: collapse;

    @media screen and (max-width: 600px) {
      max-width: 100vw;
      overflow-x: scroll;

      word-break: normal;
      white-space: nowrap;

      text-align: justify;

      margin-left: 0;
    }

    td,
    th {
      border: 1px solid white;
      padding: 5px 10px;
    }

    td:first-child,
    th:first-child {
      border-left: none;
    }
  }
`;
