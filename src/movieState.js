//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "OCAT Mock Risk Assessment",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
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
            "Two microservices: One for user authentication and authorization. One to give a risk assessment score.",
        },
      ],
    },
    {
      title: "Portfolio Website",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
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
            "Incrorporates multiple third party libraries including Framer Motion and styled components",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
