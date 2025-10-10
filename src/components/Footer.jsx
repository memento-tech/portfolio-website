import styled from "styled-components";
import linkedInLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.png";
import { Link } from "react-router";
import mTechLogo from "../assets/m-tech-logo-white-empty.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <RightSectionFooter>
          <LinkStyled to={"/"}>
            <FooterLogo src={mTechLogo} />
            <LogoTextContainer>
              <h1>Memento Tech</h1>
              <h3>Develop with us!</h3>
            </LogoTextContainer>
          </LinkStyled>
        </RightSectionFooter>
        <LeftSectionFooter>
          Find us here!
          <SocialMediaLinks>
            <a
              href="https://www.linkedin.com/in/igor--stojanovic"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaLink src={linkedInLogo} />
            </a>
            <a
              href="https://github.com/memento-tech"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaLink src={githubLogo} />
            </a>
            <a
              href="https://www.instagram.com/igor____stojanovic/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialMediaLink src={instagramLogo} />
            </a>
          </SocialMediaLinks>
        </LeftSectionFooter>
      </FooterContent>
      <Copyright>Copyright &copy; Memento Tech</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(
    90deg,
    rgba(47, 69, 129, 0.7665266790309874) 0%,
    rgba(36, 91, 150, 0.9710084717480743) 45%,
    rgba(109, 158, 218, 0.906582701439951) 100%
  );

  border-top: 2px solid white;

  min-height: 300px;
`;

const FooterContent = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Copyright = styled.div`
  font-size: 12px;
  margin-bottom: 0.5rem;
`;

const SocialMediaLinks = styled.div`
  display: flex;
`;

const SocialMediaLink = styled.img`
  width: 50px;
  height: auto;

  cursor: pointer;

  margin: 1rem;
`;

const RightSectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const LeftSectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTextContainer = styled.div`
  color: white;

  h1 {
    font-size: 28px;
    margin: 0;
  }

  h3 {
    font-size: 14px;
    margin: 0;
    font-style: italic;
    text-align: start;
  }
`;

const FooterLogo = styled.img`
  height: 80px;
  padding-right: 1rem;
`;
