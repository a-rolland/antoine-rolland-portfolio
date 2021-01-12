import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { StyledNavbar, Logo, DropdownIcon, Dropdown, StyledSpan } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
const publicPath = process.env.PUBLIC_URL

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false)
  const [dropDownButtonColor, setDropdownButtonColor] = useState("white")
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    // On each screen size change, check if the dropdown menu should be closed
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };
    const handleResize = () => setSize(getSize());
    window.addEventListener("resize", handleResize);
    size.width >= 767 && closeDropdown();
    // setState({ loggedInUser: props.userInSession });
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

  return (
    <StyledNavbar>
      <Link to="/" onClick={closeDropdown}>
          <Logo src={publicPath + "/logo__white.png"} />
      </Link>
      <DropdownIcon>
        <FontAwesomeIcon
          icon={showDropdown ? faTimes : faBars }
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
            <StyledSpan>
              ABOUT
            </StyledSpan>
        </Link>
        </li>
        {
          showDropdown || 
          <li>
          <StyledSpan>
            |
          </StyledSpan>
        </li>
        }
        <li>
          <Link to="/works" onClick={closeDropdown}>
            <StyledSpan>
              PROJECTS
            </StyledSpan>
          </Link>
        </li>
      </Dropdown>
    </StyledNavbar>
  );
}

export default Navbar;
