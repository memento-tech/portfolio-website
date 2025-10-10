import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styled from "styled-components";
import ReadmeViewer from "../components/ReadmeViewer";
import LoadingSpinner from "../components/LoadingSpinner";
import DoubleArrowIcon from "../components/icons/DoubleArrowIcon";

const DocumentationPage = ({ isProjects, documentations }) => {
  const [searchParams] = useSearchParams();
  const [projectData, setProjectData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjectData(null);

    var foundData = documentations.filter(
      (data) => data.id === searchParams.get("project")
    )[0];

    if (foundData) {
      setProjectData(foundData);
    } else {
      setProjectData(null);
    }

    setTimeout(() => setLoading(false), 1000);
  }, [searchParams, documentations]);

  if (loading) {
    return (
      <PageContainer>
        <LoadingSpinner />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackLink to={isProjects ? "/projects" : "/tech-hub"}>
        <DoubleArrowIcon height="20" />{" "}
        <span>Back to {!isProjects && "Tech Hub"} projects</span>
      </BackLink>
      {!projectData && (
        <NotFoundProjectContainer>
          <p>
            <strong>{projectData?.shortName}</strong>{" "}
            {!isProjects ? "Tech Hub" : projectData ? "project" : "Project"}{" "}
            documentation not found.
          </p>
        </NotFoundProjectContainer>
      )}

      {projectData && projectData.notFinished && (
        <NotFoundProjectContainer>
          <span>
            <strong>{projectData.shortName}</strong> {!isProjects && "Tech Hub"}{" "}
            documentation is not yet finished. Please be patient :)
          </span>
        </NotFoundProjectContainer>
      )}

      {projectData && !projectData.notFinished && (
        <MainContainer>
          <ReadmeViewer readmeData={projectData} />
        </MainContainer>
      )}
    </PageContainer>
  );
};

export default DocumentationPage;

const BackLink = styled(Link)`
  color: white;
  vertical-align: middle;

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-self: flex-start;

  margin-top: 0.5rem;
  margin-left: 2rem;

  height: 2rem;

  @media screen and (max-width: 600px) {
    display: none;
  }

  span {
    margin-left: 0.5rem;
  }
`;

const PageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  background-color: #13131397;

  position: relative;

  pre {
    background: rgb(39, 40, 34);
  }
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  height: calc(100vh - 4rem - 2rem);

  @media screen and (max-width: 600px) {
    height: calc(100vh - 6rem);
  }

  .visible {
    width: 40%;
    height: calc(100vh - 6rem);

    @media screen and (max-width: 600px) {
      width: 100%;
      min-height: 100%;
      background: #2c3e50;
    }
  }
`;

const NotFoundProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  strong {
    text-decoration: underline;
    font-style: italic;
  }
`;
