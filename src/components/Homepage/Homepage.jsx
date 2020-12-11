import { StyledHomepage, Title, Image } from './styles'
const publicPath = process.env.PUBLIC_URL

const Homepage = () => {
  return (
    <StyledHomepage>
      <Image imgUrl={publicPath + "homepage.JPG"} alt="background"/>
      {/* <Image imgUrl={publicPath + "homepage_ronda.JPG"} alt="background"/> */}
      <Title>Hi ! I'm Antoine, Junior Full Stack Web Developer.</Title>
    </StyledHomepage>
  );
}

export default Homepage;
