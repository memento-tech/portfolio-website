import styled from "styled-components";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import dependable from "../assets/dependable.png";
import graphicDesign from "../assets/graphic-design.png";
import productDevelopment from "../assets/product-development.png";
import passionDevelopment from "../assets/sustainable-development.png";
import adaptable from "../assets/adapt.png";
import { Link } from "react-router";

const WhyChooseUsSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>Why Choose Us</SectionHeader>
      <Subheader>
        At Memento Tech, we believe technology should be more then just work -
        it should inspire. We don't just deliver websites or apps, we craft
        digital experiences that leave a mark.
      </Subheader>
      <CardsContainer>
        <CardContainer>
          <CardText>
            Every project is unique. We listen, adapt, and shape solutions
            around your story.
          </CardText>
          <CardImage src={adaptable} />
        </CardContainer>
        <CardContainer>
          <CardImage src={dependable} />
          <CardText>
            We're not just developers; we're collaborators invested in your
            long-term success.
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardText>
            Clean, modern, and user-friendly interfaces that people actually
            love using.
          </CardText>
          <CardImage src={graphicDesign} />
        </CardContainer>
        <CardContainer>
          <CardImage src={productDevelopment} />
          <CardText>
            From concept to launch (and beyond), we handle every detail so you
            can focus on your vision.
          </CardText>
        </CardContainer>
        <CardContainer>
          <CardText>
            Whether it's a business tool or a social cause, we bring passion and
            precision to make it meaningful.
          </CardText>
          <CardImage src={passionDevelopment} />
        </CardContainer>
        <CardContainer>
          <CardText>
            Your idea deserves more than just code — it deserves care,
            creativity, and craftsmanship.
            <br />
            Let's bring it to life together.
          </CardText>
          <StartButton>Start Your Project</StartButton>
        </CardContainer>
      </CardsContainer>
    </SectionFullContainer>
  );
};

export default WhyChooseUsSection;

const Subheader = styled.h3`
  width: 50%;
  font-size: 16px;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  height: 180px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: -10px 10px 30px #6060603e;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    flex-direction: column;
    justify-content: center;
  }
`;

const CardText = styled.p`
  color: #000000;
  width: 60%;
  margin: 0 1rem;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
`;

const StartButton = styled(Link)`
  margin-top: 1rem;
  padding: 0.3rem 3rem;
  margin-bottom: 0;
  background-color: #fee8c2;
  border-radius: 8px;
  font-weight: 400;

  &:hover {
    scale: 1.1;
    transition: scale 0.1s ease-in-out;
  }
`;
