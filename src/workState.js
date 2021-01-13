//Import Images
import portfolio1 from "./Images/PortfolioCode.png";
import portfolio2 from "./Images/FramerMotion.png";
import ocat2 from "./Images/OCATArch.png";
import ocat1 from "./Images/OCATDetails.png";

export const WorkState = () => {
  return [
    {
      title: "OCAT Mock Risk Assessment",
      mainImg: ocat1,
      secondaryImg: ocat2,
      url: "/work/ocat",
      awards: [
        {
          title: "Project Deliverables",
          description:
            "Mock Rick assessment app that calculates the risk of cat recidivism. Complete with user authentication, form submission, deletion, and risk assessment microservices.",
        },
        {
          title: "Full Stack Architecture",
          description:
            "Constructed with Reactjs, Nodejs, Express/Resitfy for RESTful services, and PostgreSQL for the database",
        },
        {
          title: "Microservices",
          description:
            "Two microservices: User authentication services, Assessment Services",
        },
      ],
    },
    {
      title: "Portfolio Website",
      mainImg: portfolio1,
      url: "/work/portfolio",
      secondaryImg: portfolio2,
      awards: [
        {
          title: "Deliverables",
          description:
            "Personal portfolio that shows who I am as an aspiring professional developer",
        },
        {
          title: "Multiple Tools",
          description: "Written using JavaScript/React.js, HTML, and CSS. ",
        },
        {
          title: "Multiple libraries",
          description:
            "Incorporates multiple third party libraries including Framer Motion and styled components",
        },
      ],
    },
  ];
};
