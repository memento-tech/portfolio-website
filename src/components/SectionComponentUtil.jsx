import styled from "styled-components";

export const SectionFullContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export const SectionHeader = styled.h2`
  color: ${(props) => props.theme.sectionHeaderColor};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`;
