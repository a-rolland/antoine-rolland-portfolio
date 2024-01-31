import React from 'react'
import Gallery from "../Gallery/Gallery";
import { StyledWorks, Title, Logo, Paragraph, StyledProject } from "./styles";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const publicPath = process.env.PUBLIC_URL;

const Works = (props) => {
  const projects = [
    {
      title: "HackUno",
      link: "https://a-rolland.github.io/ironhackuno/",
      description:
        props.lang === "english"
          ? 'HackUno is a card game inspired of the well know "UNO". ' +
            "The goal of this game is to be the first to get rid of his cards, with a limit of time. " +
            "If no one could win before the end of the countdown, then the winner is the one who has the " +
            "lowest number of points."
          : 'HackUno es un juego de cartas basado en el famoso juego "UNO". ' +
            "El objetivo de este juego es ser el primero en deshacerse de todas sus cartas antes que se acabe el tiempo. " +
            "En el caso de que ningún jugador haya podido lograrlo, gana quien menos puntos tiene (sumando los numeros de " +
            "cada carta).",
      bootcamp: true,
      stack:
        props.lang === "english"
          ? "Built with HTML5 (with Canvas), CSS3 and Vanilla JS."
          : "Hecho con HTML5 (con Canvas), CSS3 y Vanilla JS.",
      logo: publicPath + "/projects/hackuno/logo.png",
      pictures: [
        { url: publicPath + "/projects/hackuno/pictures/1.png" },
        { url: publicPath + "/projects/hackuno/pictures/2.png" },
        { url: publicPath + "/projects/hackuno/pictures/3.png" },
        { url: publicPath + "/projects/hackuno/pictures/4.png" },
      ],
      maintened: true,
    },
    {
      title: "NutriApp",
      link: "https://nutriapp-project.herokuapp.com/",
      description:
        props.lang === "english"
          ? "With NutriApp, you can check products and see their nutrition facts. You can " +
            "also see recipes that you can cook with these products. If you sign up, you can " +
            "create your own recipes with all the products we have in our database ! Once " +
            "logged in, you can review other users recipes and leave them comments."
          : "NutriApp es una app que permite ver los valores nutricionales de productos. " +
            "Tambien se pueden ver recetas basadas en cada uno de estos productos. Al crearse una cuenta, " +
            "un usuario puede crear sus propias recetas con todos los ingredientes presentes en nuestra base de datos! " +
            "Una vez conectado, puede evaluar recetas de otros usuarios, y dejar comentarios.",
      bootcamp: true,
      stack:
        props.lang === "english"
          ? "Built with Node.js, Express.js, MongoDB, Mongoose, HTML5, CSS3 and JavaScript."
          : "Hecho con Node.js, Express.js, MongoDB, Mongoose, HTML5, CSS3 y JavaScript.",
      logo: publicPath + "/projects/nutriapp/logo.png",
      pictures: [
        { url: publicPath + "/projects/nutriapp/pictures/1.png" },
        { url: publicPath + "/projects/nutriapp/pictures/2.jpg" },
        { url: publicPath + "/projects/nutriapp/pictures/3.jpg" },
        { url: publicPath + "/projects/nutriapp/pictures/4.png" },
      ],
      maintened: false,
    },
    {
      title: "Supertrips",
      link: "https://supertrips.herokuapp.com/",
      description:
        props.lang === "english"
          ? 'Supertrips is a web app that allows to check trips made by users. A Trip is divided into "Steps", ' +
            'and each step is divided into "Experiences". This way, a user has the freedom to organize the trip the way he wants ! ' +
            "Once logged in (it is possible to do it using your Facebook account), you can create a trip and choose to make it public or not. " +
            "Each place you visited will appear on a map, and you can add photos and descriptions. Then other users " +
            "can comment your trip."
          : 'Supertrips es una app que permite ver viajes realizados por otros usuarios. Un Viaje se divide entre "Etapas", ' +
            'y cada etapa se divide entre "Experiencias". De esta forma un usuario puede organizar su viaje de la forma que más le guste! ' +
            "Una vez logueado (se puede loguear con Facebook), se puede crear un viaje y ponerlo como público o privado. " +
            "Cada lugar que ha visitado aparecerá en un mapa, y se podrán añadir fotos y descripciones. El resto de los usuarios " +
            "luego pueden comentar los viajes.",
      bootcamp: true,
      stack:
        props.lang === "english"
          ? "Built with React.js, Express.js, Node.js, MongoDB, Mongoose, Google Maps API, Facebook Login API, Passport.js, HTML5 and styled-components."
          : "Hecho con React.js, Express.js, Node.js, MongoDB, Mongoose, Google Maps API, Facebook Login API, Passport.js, HTML5 y styled-components.",
      logo: publicPath + "/projects/supertrips/logo.png",
      pictures: [
        { url: publicPath + "/projects/supertrips/pictures/1.png" },
        { url: publicPath + "/projects/supertrips/pictures/2.png" },
        { url: publicPath + "/projects/supertrips/pictures/3.png" },
        { url: publicPath + "/projects/supertrips/pictures/4.png" },
      ],
      maintened: false,
    },
    {
      title: "Jason",
      link: "https://jason.rokubun.cat/",
      description:
        props.lang === "english"
          ? "Jason is a platform created by the company Rokubun. " +
            "It is a GNSS GPS Cloud PPK service for automatic accurate navigation. "
          : "Jason es una plataforma desarrollada por la compañía Rokubun. " +
            "Es un servicio GNSS GPS Cloud PPK para navegación automatica y precisa. ",
      role: "Front-end developer",
      stack:
        props.lang === "english"
          ? "Front-end built with Next.js, React.js, Google Maps API, Mapbox, HTML5 and styled-components."
          : "Front-end hecho con Next.js, React.js, Google Maps API, Mapbox, HTML5 y styled-components.",
      logo: publicPath + "/projects/jason/logo.png",
      pictures: [
        { url: publicPath + "/projects/jason/pictures/1.png" },
        { url: publicPath + "/projects/jason/pictures/2.png" },
        { url: publicPath + "/projects/jason/pictures/3.png" },
        { url: publicPath + "/projects/jason/pictures/4.png" },
      ],
      maintened: true,
    },
    {
      title: "Banshee ",
      link: "https://www.banshee-navigation.eu/",
      description:
        props.lang === "english"
          ? "BANSHEE is a new technology that combines GNSS and WiFi ranging to get an accurate and seamless " +
            "indoor-outdoor navigation for smartphones and vehicles in Smart Cities. This technology is under " +
            "development in the framework of an R&D European project funded by the GSA in the field of " +
            "'Filling the gaps and emerging E-GNSS receivers technologies'. " +
            "The BANSHEE presentation website is a static page which includes a dynamic blog."
          : "BANSHEE is a new technology that combines GNSS and WiFi ranging to get an accurate and seamless " +
            "indoor-outdoor navigation for smartphones and vehicles in Smart Cities. This technology is under " +
            "development in the framework of an R&D European project funded by the GSA in the field of " +
            "'Filling the gaps and emerging E-GNSS receivers technologies'. " +
            "The BANSHEE presentation website is a static page which includes a dynamic blog.",
      role: "Front-end developer",
      stack:
        props.lang === "english"
          ? "Front-end built with Next.js, React.js, HTML5 and styled-components."
          : "Front-end hecho con Next.js, React.js, HTML5 y styled-components.",
      logo: publicPath + "/projects/banshee/logo.png",
      pictures: [
        { url: publicPath + "/projects/banshee/pictures/1.png" },
        { url: publicPath + "/projects/banshee/pictures/2.png" },
        { url: publicPath + "/projects/banshee/pictures/3.png" },
        { url: publicPath + "/projects/banshee/pictures/4.png" },
      ],
      maintened: true,
    },
  ];

  const listProjects = projects.map((project) => {
    return (
      <StyledProject key={project.title}>
        {project.maintened
          ? 
            <a target="_blank" href={project.maintened ? project.link : "#"} rel="noopener noreferrer">
              <Logo
                taller={project.title === "NutriApp"}
                src={project.logo}
                alt="Project logo"
              />
              <span>
                <FontAwesomeIcon icon={faExternalLinkAlt} color="grey" />
              </span>
            </a>
          :
            <Logo
              taller={project.title === "NutriApp"}
              src={project.logo}
              alt="Project logo"
            />
        }
        <Paragraph>{project.description}</Paragraph>
        {project.role && (
          <Paragraph className="role">Role: {project.role}</Paragraph>
        )}
        <Paragraph className="stack">{project.stack}</Paragraph>
        {project.bootcamp && (
          <Paragraph className="bootcamp">
            {props.lang === "english"
              ? "This project was developed during the IronHack bootcamp."
              : "Este proyecto ha sido desarrollado durante el bootcamp de IronHack"}
          </Paragraph>
        )}
        {!project.maintened && (
          <Paragraph className="maintened">
            {props.lang === "english"
              ? "(This project is no longer maintened so the link was removed)"
              : "(Este proyecto ya no está mantenido, y el enlace ha sido eliminado)"
            }
          </Paragraph>
        )}
        <Gallery pictures={project.pictures} />
      </StyledProject>
    );
  });

  return (
    <StyledWorks>
      <Title>{props.lang === "english" ? "PROJECTS" : "PROYECTOS"}</Title>
      {listProjects}
    </StyledWorks>
  );
};

export default Works;
