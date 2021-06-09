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
        imgUrl={{
          large: "/background/optxx-bg-large.jpg",
          small: "/background/optxx-bg-small.jpg",
        }}
        alt="background"
      />
      <Title>Antoine Rolland</Title>
      <SubTitle>
        Software Engineer
        <span> Junior </span>
      </SubTitle>
      <SocialMediaLinksContainer>
        <SocialMediaLink
          target="_blank"
          href="https://github.com/a-rolland"
          rel="noreferrer"
          className="gitHub"
          aria-label="Github link"
        >
          <FontAwesomeIcon icon={faGithub} color="white" />
        </SocialMediaLink>
        <SocialMediaLink
          target="_blank"
          href="https://www.linkedin.com/in/-antoine-rolland/"
          rel="noreferrer"
          className="linkedIn"
          aria-label="Linkedin link"
        >
          <FontAwesomeIcon icon={faLinkedinIn} color="white" />
        </SocialMediaLink>
      </SocialMediaLinksContainer>
    </StyledHomepage>
  );
};

export default Homepage;
