import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledHomepage,
  Title,
  SubTitle,
  Image,
  SocialMediaLinksContainer,
  SocialMediaLink,
} from "./styles";

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
      <SocialMediaLinksContainer>
        <SocialMediaLink
          target="_blank"
          href="https://github.com/a-rolland"
          rel="noreferrer"
          className="gitHub"
        >
          <FontAwesomeIcon icon={faGithub} color="white" />
        </SocialMediaLink>
        <SocialMediaLink
          target="_blank"
          href="https://www.linkedin.com/in/-antoine-rolland/"
          rel="noreferrer"
          className="linkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} color="white" />
        </SocialMediaLink>
      </SocialMediaLinksContainer>
    </StyledHomepage>
  );
};

export default Homepage;
