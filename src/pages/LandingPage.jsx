import styled from "styled-components";
import HexagonsBackground from "../components/HexagonsBackground";
import PageSection from "../components/PageSection";
import section1Gif from "../assets/section1Gif.png";
import section2Gif from "../assets/section2Gif.gif";
import section3Gif from "../assets/section3Gif.gif";
import section4Gif from "../assets/section4Gif.gif";
import MementoLogo from "../components/MementoLogo";

const section1 =
  "Memento Tech is focused on creating practical and innovative tools designed to simplify everyday tasks and empower developers around the world. By developing software solutions that are both efficient and user-friendly, Memento Tech aims to help individuals and teams tackle real-world challenges more effectively.";
const section2 =
  "With a passion for creating value, the goal is to design tools that improve workflows, enhance productivity, and make technology more accessible to those who need it. Whether it's streamlining common processes or providing solutions to niche problems, Memento Tech is driven by the desire to build products that have a positive impact.";
const section3 =
  "Every project at Memento Tech is built with the intention of making the lives of users easier. By focusing on simplicity, reliability, and usability, the goal is to provide developers and everyday users with the tools they need to succeed in their work and personal endeavors.";
const section4 =
  "Ultimately, Memento Tech aspires to contribute to the global community by offering resources that help people accomplish more, while continuously refining and improving each tool to meet evolving needs.";

const LandingPage = () => {
  return (
    <PageContainer>
      <HexagonsBackground />

      <MementoLogo />
      <SectionsContainer>
        <PageSection
          leftOrient={true}
          text={section1}
          visualSrc={section1Gif}
        />
        <PageSection
          leftOrient={false}
          text={section2}
          visualSrc={section2Gif}
        />
        <PageSection
          leftOrient={true}
          text={section3}
          visualSrc={section3Gif}
        />
        <PageSection
          leftOrient={false}
          text={section4}
          visualSrc={section4Gif}
        />
      </SectionsContainer>
    </PageContainer>
  );
};

export default LandingPage;

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  box-sizing: border-box;
  scroll-behavior: smooth; /* Smooth scrolling for entire page */

  @media screen and (max-width: 600px) {
    padding: 0 5%;
  }
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
