// @ts-ignore
import { useEffect, useState } from "react";
import ReadmeNavigation from "./ReadmeNavigation";
import ReadmeTextViewer from "./ReadmeTextViewer";

const ReadmeViewer = ({ readmeData }) => {
  const [markdown, setMarkdown] = useState("");
  const [toc, setToc] = useState([]);

  useEffect(() => {
    fetch(readmeData.readmeUrl)
      .then((response) => response.text())
      .then((text) => {
        const { filteredMarkdown, extractedToc } = processMarkdown(text);
        setMarkdown(filteredMarkdown);
        setToc(extractedToc);
      });
  }, [readmeData]);

  if (!markdown) {
    return <></>;
  }

  return (
    <>
      {toc.length > 0 && (
        <ReadmeNavigation navigationLinks={toc} projectId={readmeData.name} />
      )}
      <ReadmeTextViewer markdownText={markdown} />
    </>
  );
};

const processMarkdown = (mdText) => {
  const lines = mdText.split("\n");
  let inToc = false;
  let extractedToc = [];
  let filteredMarkdown = [];

  lines.forEach((line) => {
    if (line.startsWith("### Table of Content")) {
      inToc = true;
      return;
    }
    if (inToc && line.trim() === "") {
      inToc = false;
      return;
    }

    if (inToc) {
      const match = line.match(/- \[(.*?)\]\(#(.*?)\)/);
      const subMatch = line.match(/^\s+- \[(.*?)\]\(#(.*?)\)/);

      const fullTitle = match[1];

      if (match) {
        extractedToc.push({
          navPrefix: fullTitle.substring(0, fullTitle.indexOf(" ")),
          title: fullTitle.substring(fullTitle.indexOf(" ") + 1),
          id: match[2],
          level: subMatch ? 2 : 1,
        });
      }
    } else {
      filteredMarkdown.push(line);
    }
  });

  return {
    filteredMarkdown: filteredMarkdown.join("\n"),
    extractedToc,
  };
};

export default ReadmeViewer;
