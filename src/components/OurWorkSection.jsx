import styled from "styled-components";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import littleZenImage from "../assets/LittleZen.png";
import myGoalsAppImage from "../assets/MyGoalsAPP.png";
import ogledaloDrustvaWebpageImage from "../assets/ogledalo-drustva-webpage.png";
import { Link } from "react-router";

const OurWorkSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>Our Work</SectionHeader>
      <ProjectsContainer>
        <ProjectContainer style={{ backgroundColor: "#E5F2F8" }}>
          <ProjectImageContainer $bg="linear-gradient(#80CBF3, #60A6CC)">
            <ProjectImage src={littleZenImage} />
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <ProjectTitle>Little Zen - Yoga Website</ProjectTitle>
            <ProjectSubtitle>
              “In a fast-paced world, stillness is a gift.”
            </ProjectSubtitle>
            <ProjectText>
              Little Zen was born out of the need to create a digital space as
              calming as a yoga mat itself. We crafted a platform where every
              detail - from the color palette to the navigation flow - breathes
              serenity. It's more than a website; it's an invitation to pause,
              to reconnect, and to embrace mindfulness. Just as yoga unites body
              and soul, Little Zen unites design and purpose into a seamless,
              peaceful experience.
            </ProjectText>
          </ProjectDescriptionContainer>
        </ProjectContainer>
        <ProjectContainer style={{ backgroundColor: "#F0FFF7" }}>
          <ProjectImageContainer $bg="linear-gradient(#69cc60, #80f3b4)">
            <ProjectImage
              src={myGoalsAppImage}
              style={{ transform: "translateY(-5px) translateX(-1px)" }}
            />
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <ProjectTitle>MyGoals (Personal Goals App)</ProjectTitle>
            <ProjectSubtitle>
              “Dreams are only as strong as the steps we take toward them.”
            </ProjectSubtitle>
            <ProjectText>
              MyGoals started with a simple question: What if we could make our
              goals feel closer, more achievable? We designed an application
              that transforms ambition into action, giving users not just a
              calendar, but a companion on their journey. Every feature was
              built to empower, encourage, and remind people that progress - no
              matter how small - is still progress. MyGoals is more than
              scheduling; it's about building the life you envision, one goal at
              a time.
            </ProjectText>
          </ProjectDescriptionContainer>
        </ProjectContainer>
        <ProjectContainer style={{ backgroundColor: "#FCF6E5" }}>
          <ProjectImageContainer $bg="linear-gradient(#FADB60, #F5BB81)">
            <ProjectImage src={ogledaloDrustvaWebpageImage} />
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <ProjectTitle>
              Ogledalo Društva (Web Portal Society's Mirror)
            </ProjectTitle>
            <ProjectSubtitle>
              “Some stories demand to be told, not for profit, but for change.”
            </ProjectSubtitle>
            <ProjectText>
              Ogledalo Društva (The Mirror of Society) is a labor of heart. We
              created this portal pro bono, driven by the stories of resilience,
              courage, and human dignity. It's a space where the voices of
              people overcoming disabilities and societal challenges find their
              light. Every line of code was written with purpose - not to build
              a product, but to build hope. This project reminds us why
              technology matters most when it gives a voice to those who are too
              often unheard.
            </ProjectText>
          </ProjectDescriptionContainer>
        </ProjectContainer>
      </ProjectsContainer>
      <ViewAllButton>See All</ViewAllButton>
    </SectionFullContainer>
  );
};

export default OurWorkSection;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

const ProjectContainer = styled.div`
  width: 80%;
  height: 400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f0fff7;

  border-radius: 10px;
  box-shadow: -10px 10px 50px #00000041;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: #000000;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1ft;
    grid-template-rows: 1fr 1fr;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.$bg || "transparent"};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 2rem 3rem 1rem;
  margin: auto;
  width: 80%;
`;

const ProjectTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const ProjectSubtitle = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 12px;
`;

const ProjectText = styled.p`
  text-align: start;
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 25px;
  margin-top: 2rem;
  margin-bottom: 0;
`;

const ViewAllButton = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 3rem;
  border: 1px solid #6b98d8;
  background-color: #6b98d8;
  border-radius: 15px;
  color: white;
`;
