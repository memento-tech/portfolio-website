import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import mTechLogo from "../assets/m-tech-logo-white-empty.png";

const MementoLogo = () => {
  const text = "Memento Tech_";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000);
    }
  }, [index, text]);

  return (
    <NameLogoContainer>
      <TypingText>
        {displayedText}
        <VerticalLine>|</VerticalLine>
      </TypingText>
      <MovingLogo src={mTechLogo} />
    </NameLogoContainer>
  );
};

export default MementoLogo;

const Cursor = keyframes`
  50% { color: transparent; }
`;

const NameLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem);

  position: relative;
`;

const TypingText = styled.div`
  font-size: 3rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 -20px -20px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const VerticalLine = styled.p`
  color: white;
  animation: ${Cursor} 0.8s infinite;
  margin: 0;
`;

const MovingLogo = styled.img`
  margin-top: 3rem;
  width: 100px;
  height: 100px;
  animation: moveLogo 3s ease-in-out infinite;

  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }

  @keyframes moveLogo {
    0% {
      rotate: 15deg;
      transform: translateX(-50px);
    }
    50% {
      rotate: -15deg;
      transform: translateX(50px);
    }
    100% {
      rotate: 15deg;
      transform: translateX(-50px);
    }
  }
`;
