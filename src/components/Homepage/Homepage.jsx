import { StyledHomepage, Title, SubTitle, Image } from './styles'
const publicPath = process.env.PUBLIC_URL

const Homepage = () => {
  return (
    <StyledHomepage>
      <Image imgUrl={publicPath + "/homepage.JPG"} alt="background"/>
      {/* <Image imgUrl={publicPath + "/homepage_ronda.JPG"} alt="background"/> */}
      <Title>Antoine Rolland</Title>
      <SubTitle>Full Stack Developer</SubTitle>
    </StyledHomepage>
  );
}

export default Homepage;
