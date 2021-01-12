import { StyledHomepage, Title, SubTitle, Image } from './styles'
// const publicPath = process.env.PUBLIC_URL

const Homepage = () => {
  return (
    <StyledHomepage>
      <Image imgUrl="https://res.cloudinary.com/nutriapp/image/upload/v1609839165/homepage_mcfheg.jpg" alt="background"/>
      {/* <Image imgUrl={publicPath + "/homepage.JPG"} alt="background"/> */}
      {/* <Image imgUrl={publicPath + "/homepage_ronda.JPG"} alt="background"/> */}
      <Title>Antoine Rolland</Title>
      <SubTitle>Full Stack Developer</SubTitle>
    </StyledHomepage>
  );
}

export default Homepage;
