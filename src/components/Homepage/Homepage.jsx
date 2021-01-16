import { StyledHomepage, Title, SubTitle, Image } from "./styles";

const Homepage = (props) => {
  return (
    <StyledHomepage>
      <Image
        imgUrl="https://res.cloudinary.com/nutriapp/image/upload/v1609839165/homepage_mcfheg.jpg"
        alt="background"
      />
      <Title>Antoine Rolland</Title>
      <SubTitle>
        {props.lang === "english"
          ? "Full Stack Web Developer"
          : "Desarrollador Web Full Stack"}
        <span> Junior </span>
      </SubTitle>
    </StyledHomepage>
  );
};

export default Homepage;
