import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  StyledNavbar,
  Logo,
  DropdownIcon,
  Dropdown,
  StyledSpan,
  Flag,
  SocialMediaLink,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const publicPath = process.env.PUBLIC_URL;

const Navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDownButtonColor, setDropdownButtonColor] = useState("white");
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const location = useLocation();

  useEffect(() => {
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };
    const handleResize = () => setSize(getSize());
    window.addEventListener("resize", handleResize);
    size.width >= 767 && closeDropdown();
  }, [size.width]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleDropdownButtonColor = () => {
    dropDownButtonColor === "white"
      ? setDropdownButtonColor("grey")
      : setDropdownButtonColor("white");
  };

  const switchLanguage = () => {
    props.handleToggleLanguage();
  };

  return (
    <StyledNavbar isHomepage={location.pathname === "/"}>
      <Link to="/" onClick={closeDropdown}>
        <Logo src={publicPath + "/logo__white.png"} alt="Brand logo" />
      </Link>
      <DropdownIcon>
        <FontAwesomeIcon
          icon={showDropdown ? faTimes : faBars}
          size="lg"
          color={dropDownButtonColor}
          onMouseEnter={toggleDropdownButtonColor}
          onMouseLeave={toggleDropdownButtonColor}
          onClick={toggleDropdown}
        />
      </DropdownIcon>
      <Dropdown showDropdown={showDropdown ? "flex" : "none"}>
        <li>
          <Link to="/about" onClick={closeDropdown}>
            <StyledSpan
              className="about"
              isAbout={location.pathname === "/about"}
            >
              {props.lang === "english" ? "ABOUT" : "SOBRE MI"}
            </StyledSpan>
          </Link>
        </li>
        {showDropdown || (
          <li>
            <StyledSpan className="separator">|</StyledSpan>
          </li>
        )}
        <li>
          <Link to="/works" onClick={closeDropdown}>
            <StyledSpan
              className="projects"
              isProjects={location.pathname === "/works"}
            >
              {props.lang === "english" ? "PROJECTS" : "PROYECTOS"}
            </StyledSpan>
          </Link>
        </li>
        <li>
          <SocialMediaLink
            target="_blank"
            href="https://github.com/a-rolland"
            rel="noreferrer"
            className="gitHub"
            isHomepage={location.pathname === "/"}
            aria-label="Github link"
          >
            <FontAwesomeIcon icon={faGithub} color="white" />
          </SocialMediaLink>
        </li>
        <li>
          <SocialMediaLink
            target="_blank"
            href="https://www.linkedin.com/in/-antoine-rolland/"
            rel="noreferrer"
            className="linkedIn"
            isHomepage={location.pathname === "/"}
            aria-label="Linkedin link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
          </SocialMediaLink>
        </li>
        <li style={{ color: "white" }}>
          {props.lang === "english" ? (
            <Flag
              src={publicPath + "/esFlag.png"}
              onClick={switchLanguage}
              alt="Click to display in Spanish"
            />
          ) : (
            <Flag
              src={publicPath + "/enFlag.png"}
              onClick={switchLanguage}
              alt="Click to display in English"
            />
          )}
        </li>
      </Dropdown>
    </StyledNavbar>
  );
};

export default Navbar;
