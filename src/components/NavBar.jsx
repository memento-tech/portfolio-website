// @ts-nocheck
import styled from "styled-components";
import mTechLogo from "../assets/m-tech-logo-white-empty.png";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import SendwichIcon from "./SendwichIcon";

const NavBar = () => {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBarContainer $scrolled={scrolled.toString()}>
        <Link to={"/"}>
          <NavBarLogo src={mTechLogo} />
        </Link>
        <SendwichIcon
          clicked={menuIconClicked}
          color="white"
          onClick={() => setMenuIconClicked(!menuIconClicked)}
        />

        <SmallScreenManuContainer $menuIconClicked={menuIconClicked}>
          <NavBarLink
            to={"/"}
            onClick={() => setMenuIconClicked(!menuIconClicked)}
          >
            Home
          </NavBarLink>
          <NavBarLink
            to={"/projects"}
            onClick={() => setMenuIconClicked(!menuIconClicked)}
          >
            Projects
          </NavBarLink>
          <NavBarLink
            to={"/tech-hub"}
            onClick={() => setMenuIconClicked(!menuIconClicked)}
          >
            Tech Hub
          </NavBarLink>
          <NavBarLink
            to={"/contact-us"}
            onClick={() => setMenuIconClicked(!menuIconClicked)}
          >
            Contact Us
          </NavBarLink>
        </SmallScreenManuContainer>

        <LinksContainer>
          <NavBarLink to={"/"}>Home</NavBarLink>
          <NavBarLink to={"/projects"}>Projects</NavBarLink>
          <NavBarLink to={"/tech-hub"}>Tech Hub</NavBarLink>
          <NavBarLink to={"/contact-us"}>Contact Us</NavBarLink>
        </LinksContainer>
      </NavBarContainer>
    </>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;

  background: ${({ $scrolled }) =>
    $scrolled === "true"
      ? "linear-gradient(90deg, rgba(47,69,129,1) 0%, rgba(36,91,150,1) 45%, rgba(109,158,218,1) 100%)"
      : "#0d11170"};
  border-bottom: ${({ $scrolled }) =>
    $scrolled === "true" ? "none" : "2px solid #ffffff"};

  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding: 0 0.5rem;
  padding-bottom: ${({ $scrolled }) => ($scrolled === "true" ? "2px" : "0")};

  z-index: 1000;
`;

const NavBarLogo = styled.img`
  max-height: 50%;
  max-width: 50px;
  border-radius: 8px;
  margin: 0 10px;
  padding-top: 8px;

  @media screen and (max-width: 600px) {
    max-width: 40px;
  }
`;

const LinksContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const NavBarLink = styled(Link)`
  color: white;
  padding: 0 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.2);
    color: #ffffff;
    font-weight: 800;
  }

  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const SmallScreenManuContainer = styled.div`
  position: absolute;
  top: 4rem;
  left: ${({ $menuIconClicked }) => ($menuIconClicked ? "0" : "600px")};
  width: 100%;
  background-color: #000000db;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 1rem;

  transition: left 0.5s ease-in-out;

  z-index: 999;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
