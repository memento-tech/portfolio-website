import { Link } from "react-router";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <PageContainer>
      <p>Requested page does not exist</p>
      <LinkStyled to={"/"}>Back Home</LinkStyled>
    </PageContainer>
  );
};

export default ErrorPage;

const PageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  border: 1px solid white;
  padding: 4px 7px;
  border-radius: 5px;

  &:hover {
    scale: 1.1;
  }
`;
