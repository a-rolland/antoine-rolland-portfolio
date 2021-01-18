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
    },
  ];

  const listProjects = projects.map((project) => {
    return (
      <StyledProject key={project.title}>
        <a target="_blank" href={project.link} rel="noreferrer">
          <Logo src={project.logo} />
          <span>
            <FontAwesomeIcon icon={faExternalLinkAlt} color="grey" />
          </span>
        </a>
        <Paragraph>{project.description}</Paragraph>
        <Paragraph className="stack">{project.stack}</Paragraph>
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
