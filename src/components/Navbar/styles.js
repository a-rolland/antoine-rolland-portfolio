import styled, { keyframes } from "styled-components";

const slowlyAppears = keyframes`
  0%   {opacity: 0;}
  100% {opacity: 1;}
`;

const menuTransition = keyframes`
  from  {opacity: 0;}
  to    {opacity: 1;}
`;

export const StyledNavbar = styled.div`
  position: fixed;
  padding-bottom: 10px;
  width: 100%;
  z-index: 5;
  background-color: ${(props) => (props.$isHomepage ? "none" : "#181818")};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    padding-bottom: 25px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 55px;
  margin: 0 0 0 20px;

  @media (max-width: 600px) {
    width: 75px;
    height: 41px;
    margin: 20px 0 0 20px;
  }

  @media (min-width: 600px) and (max-width: 767px) {
    width: 85px;
    height: 47px;
    margin: 20px 0 0 20px;
  }
`;

export const Dropdown = styled.ul`
  @media (max-width: 767px) {
    display: ${(props) => props.$showDropdown};
    flex-direction: column;
    list-style-type: none;
    top: 83px;
    right: 0px;
    padding-left: 0;
    width: 100%;
    position: absolute;
    z-index: 5;
    height: fit-content;
    background-color: rgba(30, 30, 30, 0.9);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 1);
    padding: 20px 0;

    animation: ${menuTransition} 0.3s;
    font-size: 12px;

    li {
      margin: 10px;
      list-style-type: none;
      display: flex;
      justify-content: center;

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 600px) {
    top: 78px;
  }

  @media (min-width: 768px) {
    margin-right: 40px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
`;

export const StyledSpan = styled.span`
  animation: ${slowlyAppears} 2s;
  font-family: "Baloo Tamma 2", cursive;
  font-size: 30px;
  color: white;
  font-weight: 500;
  margin: 0 10px;

  &.separator {
    font-size: 10px;
  }

  &.about {
    color: ${(props) => props.$isAbout && "#007eff"};
    &:hover {
      opacity: 0.7;
    }
  }

  &.projects {
    color: ${(props) => props.$isProjects && "#007eff"};
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const DropdownIcon = styled.span`
  margin: 25px 40px 0 0;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Flag = styled.img`
  width: 25px;
  height: 25px;
  animation: ${slowlyAppears} 2s;
  cursor: pointer;
  margin: 10px 0;

  @media (min-width: 768px) {
    margin-left: 33px;
  }
`;

export const SocialMediaLink = styled.a`
  animation: ${slowlyAppears} 2s;
  font-size: 25px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    margin: 0 10px 10px 10px;
    position: absolute;
    right: 30px;

    &.gitHub {
      top: 110px;
    }

    &.linkedIn {
      top: 180px;
    }
  }
`;
