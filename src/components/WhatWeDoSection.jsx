import styled from "styled-components";
import SupportIcon from "../icons/SupportIcon";
import RocketIcon from "../icons/RocketIcon";
import SmartphoneIcon from "../icons/SmartphoneIcon";
import BrowserIcon from "../icons/BrowserIcon";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";

const WhatWeDoSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>What we do</SectionHeader>
      <CardsContainer>
        <Card>
          <h3>Web Development</h3>
          <BrowserIcon height={120} />
          <CardText>
            We build fast, responsive, and modern websites tailored to your
            business needs, ensuring seamless performance across all devices.
          </CardText>
        </Card>
        <Card>
          <h3>Mobile Apps</h3>
          <SmartphoneIcon height={120} />
          <CardText>
            From iOS to Android, we create user-friendly mobile applications
            that engage customers and bring your ideas to life on the go.
          </CardText>
        </Card>
        <Card>
          <h3>Digital Transformation</h3>
          <RocketIcon height={120} />
          <CardText>
            Helping businesses modernize processes, integrate technology, and
            stay competitive in the digital-first world.
          </CardText>
        </Card>
        <Card>
          <h3>IT Consulting & Support</h3>
          <SupportIcon height={120} />
          <CardText>
            We provide expert advice and ongoing support to help you choose the
            right technology, optimize processes, and keep your systems running
            smoothly.
          </CardText>
        </Card>
      </CardsContainer>
    </SectionFullContainer>
  );
};

export default WhatWeDoSection;

const CardsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 7%;
  margin-top: 1rem;
`;

const Card = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground};
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: 10px;
  box-shadow: -5px 5px 4px ${(props) => props.theme.backdrop};
  color: #000000;
`;

const CardText = styled.p`
  box-sizing: border-box;
  width: 80%;
  margin: 1rem 1rem;
  font-weight: 400;
`;
