import React from 'react'
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
const publicPath = process.env.PUBLIC_URL;

const Homepage = () => {
  return (
    <StyledHomepage>
      <Image
        imgUrl={{
          large: `${publicPath}/background/bg-large.jpg`,
          small: `${publicPath}/background/bg-small.jpg`,
        }}
        alt="background"
      />
      <Title>Antoine Rolland</Title>
      <SubTitle>Front End Developer</SubTitle>
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
