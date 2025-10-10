import { Link } from "react-router";
import styled from "styled-components";
import techBlogs from "../data/techBlogs";

const TechHubPage = () => {
  return (
    <PageContainer>
      <PageIntro>
        Welcome to the Tech Hub <br />
        <br />
        your go-to space for insightful programming guides, tech trends, and
        practical how-tos. Whether you're a beginner looking for structured
        learning or an experienced developer seeking advanced insights, our
        curated articles help you stay ahead in the ever-evolving tech
        landscape. <br /> <br /> Explore, learn, and build with confidence!
      </PageIntro>

      <BlogLinksContainer>
        {techBlogs.map((blog, index) => (
          <BlogLink key={index} to={blog.link}>
            {blog.icon}
            <BlogTextContainer>
              <BlogTitle>{blog.shortName}</BlogTitle>
              <BlogText>{blog.description}</BlogText>
            </BlogTextContainer>
          </BlogLink>
        ))}
      </BlogLinksContainer>
    </PageContainer>
  );
};

export default TechHubPage;

const PageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PageIntro = styled.p`
  font-size: 1.2eem;
  font-weight: 200;
  max-width: 80%;
  text-align: center;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const BlogLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-around;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border-top: 1px solid white;
  padding-top: 2rem;
`;

const BlogLink = styled(Link)`
  border: 2px solid #3f3f3f;
  border-radius: 5px;
  text-decoration: none;
  padding: 30px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.2s ease-in-out;

  width: 40%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

const BlogTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  width: 70%;

  @media screen and (max-width: 600px) {
    width: 90%;
    text-align: center;
    margin-top: 1rem;
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.1em;
  font-weight: 200;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const BlogText = styled.p`
  font-size: 0.9em;
  font-style: italic;

  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;
