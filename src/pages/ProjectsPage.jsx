import { Link } from "react-router";
import styled from "styled-components";
import projectsData from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <PageContainer>
      <ProjectLinksContainer>
        {projectsData.map((project) => (
          <ProjectLink to={project.link}>
            {project.icon}
            <ProjectTitle>{project.shortName}</ProjectTitle>
            <ProjectText>{project.description}</ProjectText>
          </ProjectLink>
        ))}
      </ProjectLinksContainer>
    </PageContainer>
  );
};

export default ProjectsPage;

const PageContainer = styled.div`
  flex-grow: 1;

  margin: 2rem 0;
`;

const ProjectLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Always 4 columns */
  gap: 20px;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  /* Ensure that if only one link exists, it spans all 4 columns */
  & > *:nth-child(1):nth-last-child(1) {
    grid-column: span auto;
  }
`;

const ProjectLink = styled(Link)`
  border: 2px solid #3f3f3f;
  border-radius: 5px;
  box-shadow: none;
  text-decoration: none;
  padding: 40px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out; /* Smooth transition effect */

  &:hover {
    transform: scale(1.05); /* Slight pop-up effect */
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.2em;
`;

const ProjectText = styled.p`
  font-size: 1em;
`;
