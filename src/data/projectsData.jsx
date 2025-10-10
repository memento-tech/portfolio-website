import BackofficeIcon from "../components/icons/BackofficeIcon";
import ConvertIcon from "../components/icons/ConvertIcon";

const projectsData = [
  {
    id: "backoffice",
    gitUrl:
      "https://github.com/memento-tech/memento-backoffice-spring-boot-starter/",
    readmeUrl:
      "https://raw.githubusercontent.com/memento-tech/memento-backoffice-spring-boot-starter/main/README.md",
    name: "Backoffice Starter",
    shortName: "Backoffice",
    description:
      "Efficiently manage and oversee platform operations with a secure and intuitive back-office system.",
    link: "documentation?project=backoffice",
    icon: <BackofficeIcon />,
  },
  {
    id: "xmlToCsvConverter",
    gitUrl:
      "https://github.com/memento-tech/memento-tech-xml-to-csv-converter/",
    readmeUrl:
      "https://raw.githubusercontent.com/memento-tech/memento-tech-xml-to-csv-converter/main/README.md",
    name: "XML to CSV Converter",
    shortName: "Data Converter",
    description:
      "API for converting and validating CSV/XML files using desktop or client-server applications.",
    link: "documentation?project=xmlToCsvConverter",
    icon: <ConvertIcon />,
  },
];

export default projectsData;
