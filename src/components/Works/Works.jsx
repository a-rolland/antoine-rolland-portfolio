import Gallery from '../Gallery/Gallery'
import { StyledWorks, Title, Logo, ProjectTitle, Paragraph, StyledProject } from './styles'
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
const publicPath = process.env.PUBLIC_URL

const Works = () => {
  const projects = [
    {
      title: "HackUno",
      link: "https://a-rolland.github.io/ironhackuno/",
      description: 'HackUno is a card game inspired of the well know "UNO". '
        + 'The goal of this game is to be the first to get rid of his cards, with a limit of time. '
        + 'If no one could win before the end of the countdown, then the winner is the one who has the'
        + 'lowest number of points.',
      logo: publicPath + "/projects/hackuno/logo.png",
      pictures: [{url: publicPath + "/projects/hackuno/pictures/1.png"},
      {url: publicPath + "/projects/hackuno/pictures/2.png"},
      {url: publicPath + "/projects/hackuno/pictures/3.png"},
      {url: publicPath + "/projects/hackuno/pictures/4.png"}]
    },
    {
      title: "NutriApp",
      link: "https://nutriapp-project.herokuapp.com/",
      description: 'With NutriApp, you can check products and see their nutrition facts. You can '
        + 'also see recipes than you can cook with these products. If you sign up, you can '
        + 'create your own recipes with all the products we have in our database ! Once '
        + 'logged in, you can review other users recipes and leave them comments.',
      logo: publicPath + "/projects/nutriapp/logo.png",
      pictures: [{url: publicPath + "/projects/nutriapp/pictures/1.png"},
      {url: publicPath + "/projects/nutriapp/pictures/2.jpg"},
      {url: publicPath + "/projects/nutriapp/pictures/3.jpg"},
      {url: publicPath + "/projects/nutriapp/pictures/4.png"}]
    },
    {
      title: "Supertrips",
      link: "https://supertrips.herokuapp.com/",
      description: 'Supertrips is an web app that allows to check trips made be users. A trip is divided intro "Steps", '
        + 'and each step is divided into "Experiences". This way, a user has the freedom to organize the trip the way he wants ! '
        + 'Once logged in (it is possible to do it with Facebook), you can create a trip and choose to make it public or not. '
        + 'Each place you visited will appear on a map, and you can add photos and descriptions. Then other users '
        + 'can comment your trip.',
      logo: publicPath + "/projects/supertrips/logo.png",
      pictures: [{url: publicPath + "/projects/supertrips/pictures/1.png"},
      {url: publicPath + "/projects/supertrips/pictures/2.png"},
      {url: publicPath + "/projects/supertrips/pictures/3.png"},
      {url: publicPath + "/projects/supertrips/pictures/4.png"},
      {url: publicPath + "/projects/supertrips/pictures/5.png"},
      {url: publicPath + "/projects/supertrips/pictures/6.png"}]
    },
  ]

  const listProjects = projects.map(project => {
    return(
      <StyledProject key={project.title}>
        <a target="_blank" href={project.link} rel='noreferrer'>
          <Logo src={project.logo} />
        </a>
        <div width="400px">
        <Gallery pictures={project.pictures} />
        </div>
        
        <Paragraph>
          {project.description}
        </Paragraph>
      </StyledProject>
    )
  })

  return (
    <StyledWorks>
      <Title>
        My Projects
      </Title>
      {listProjects}
    </StyledWorks>
  );
}

export default Works;
