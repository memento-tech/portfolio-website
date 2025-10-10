import styled from "styled-components";

const FullContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  position: relative;

  font-family: "Merriweather", serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  background-color: ${(props) => props.theme.backgroundColor};

  color: ${(props) => props.theme.fontColorBlack};
  overflow: hidden;
`;

export default FullContainer;
