import styled from "styled-components";

const PageSection = ({
  leftOrient,
  text,
  visualSrc,
  srcHeight = "200px",
  srcWidth = "auto",
}) => {
  var srcStyle = {
    height: srcHeight,
    width: srcWidth,
  };
  return (
    <SectionContainer $leftSide={leftOrient}>
      {leftOrient ? (
        <SectionText>{text}</SectionText>
      ) : (
        <img src={visualSrc} style={srcStyle} alt="missing" />
      )}
      {leftOrient ? (
        <img src={visualSrc} style={srcStyle} alt="missing" />
      ) : (
        <SectionText>{text}</SectionText>
      )}
    </SectionContainer>
  );
};

export default PageSection;

const SectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: end;
  padding: 1rem 0;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: ${({ $leftSide }) =>
      $leftSide ? "column-reverse" : "column"};
    justify-content: center;
    align-items: center;

    padding: 0 0;
  }

  margin-bottom: 2rem;
`;

const SectionText = styled.p`
  margin: 0;
  text-align: center;

  background: linear-gradient(
    transparent 0%,
    rgba(0, 0, 0, 0.8) 50%,
    transparent 100%
  );

  @media screen and (max-width: 600px) {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.705) 0%,
      rgba(0, 0, 0, 0.705) 50%,
      rgba(20, 150, 11, 0) 60%
    );
  }

  padding: 1rem;
`;
