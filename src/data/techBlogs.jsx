import CookieIcon from "../components/icons/CookieIcon";
import GambleIcon from "../components/icons/GambleIcon";
import ReactIcon from "../components/icons/ReactIcon";
import RockIcon from "../components/icons/RockIcon";
import SpringBootStarterIcon from "../components/icons/SpringBootStarterIcon";
import StyledComponentIcon from "../components/icons/StyledComponentIcon";

const techBlogs = [
  {
    id: "spring-security-with-http-only-cookie",
    gitUrl:
      "https://github.com/memento-tech/spring-security-with-whttp-only-cookie-demo/",
    readmeUrl:
      "https://raw.githubusercontent.com/memento-tech/spring-security-with-whttp-only-cookie-demo/main/README.md",
    shortName: "Spring Security with HttpOnly cookie",
    description:
      "Step by step guide on how to set up a Spring Boot web app with the HttpOnly cookie security feature. Example code provided..",
    link: "documentation?project=spring-security-with-http-only-cookie",
    icon: <CookieIcon />,
  },
  {
    id: "styled-components",
    gitUrl: "https://github.com/memento-tech/styled-components-tech-hub/",
    readmeUrl:
      "https://raw.githubusercontent.com/memento-tech/styled-components-tech-hub/main/README.md",
    shortName: "Styled components with React JS",
    description:
      "Learn how to style your React applications efficiently using Styled Components. Includes dynamic theming and best practices.",
    link: "documentation?project=styled-components",
    icon: <StyledComponentIcon />,
  },
  {
    id: "stretch-game",
    gitUrl: "https://github.com/memento-tech/styled-components-tech-hub/",
    readmeUrl:
      "https://raw.githubusercontent.com/memento-tech/stretch-game/main/README.md",
    shortName: "Technical assignemnt - Stretch Game",
    description:
      "Java-based scratch game where users place bets, generate symbol matrices, and win rewards based on predefined combinations and bonus multipliers.",
    link: "documentation?project=stretch-game",
    icon: <GambleIcon />,
  },
  {
    id: "solid-principles",
    notFinished: true,
    gitUrl: null,
    readmeUrl: null,
    shortName: "SOLID principles",
    description:
      "Understand the SOLID principles in software development and how they improve code maintainability and scalability.",
    link: "documentation?project=solid-principles",
    icon: <RockIcon />,
  },
  {
    id: "react-router-basics",
    notFinished: true,
    gitUrl: null,
    readmeUrl: null,
    shortName: "React Router basics",
    description:
      "A beginner-friendly guide to React Router, covering navigation, route parameters, and protected routes with practical examples.",
    link: "documentation?project=react-router-basics",
    icon: <ReactIcon />,
  },
  {
    id: "spring-initial-setup",
    notFinished: true,
    gitUrl: null,
    readmeUrl: null,
    shortName: "Spring Boot Starter - initial setup",
    description:
      "Learn how to create a custom Spring Boot Starter to simplify dependency management and project setup.",
    link: "documentation?project=spring-initial-setup",
    icon: <SpringBootStarterIcon />,
  },
];

export default techBlogs;
