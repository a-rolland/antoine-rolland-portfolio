import styled, { keyframes } from 'styled-components'

const slowlyAppears = keyframes`
  0%   {opacity: 0;}
  100% {opacity: 1;}
`

const menuTransition = keyframes`
  from  {opacity: 0;}
  to    {opacity: 1;}
`

export const StyledNavbar = styled.div`
  position: fixed;
  margin: 20px 20px;
  width: 100%;
  z-index: 1;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  width: 100px;
`

export const Dropdown = styled.ul`

  @media (max-width: 767px) {
    display: ${(props) => props.showDropdown};
    flex-direction: column;
    list-style-type: none;
    top: 65px;
    right: 0px;
    padding-left: 0;
    width: 300px;
    position: absolute;
    z-index: 6;
    height: fit-content;
    background-color: rgba(30, 30, 30, .6);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 1);
    padding: 20px 0;

    animation-name: ${menuTransition};
    animation-duration: 0.3s;
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

  @media (min-width: 767px) {
    margin-right: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
`

export const StyledSpan = styled.span`
  animation: ${slowlyAppears} 2s;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 30px;
  color: white;
  font-weight: 500;
  margin: 0 10px;
`

export const DropdownIcon = styled.span`
  margin-right: 60px;
  
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 767px) {
    display: none;
  }
`

export const Flag = styled.img`
  width: 25px; 

  @media (min-width: 769px) {
    margin-left: 10px;
  }
`










  // font-family: 'Delius', cursive;
  // font-family: 'Patrick Hand SC', cursive;
  // font-family: 'Coming Soon', cursive; 
  // font-family: 'Rancho', cursive; 
  // font-family: 'Pacifico', cursive; 
  // font-family: 'Amatic SC', cursive; 
  // font-family: 'Baloo Tamma 2', cursive;
  // font-family: 'Ubuntu', sans-serif;