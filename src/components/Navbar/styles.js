import styled, { keyframes } from 'styled-components'

const slowlyAppears = keyframes`
  0%   {opacity: 0;}
  100% {opacity: 1;}
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
`

export const Logo = styled.img`
  width: 100px;
`

export const LinksList = styled.div`
  margin-right: 40px;
`

export const StyledSpan = styled.span`
  animation: ${slowlyAppears} 4s;
  /* font-family: 'Delius', cursive; */
  /* font-family: 'Patrick Hand SC', cursive; */
  /* font-family: 'Coming Soon', cursive; */
  /* font-family: 'Rancho', cursive; */
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'Baloo Tamma 2', cursive;
  /* font-family: 'Ubuntu', sans-serif; */
  font-size: 30px;
  color: white;
  font-weight: 600;
  margin: 0 10px;
`



