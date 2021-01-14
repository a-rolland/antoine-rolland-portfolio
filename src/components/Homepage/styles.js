import styled, { keyframes } from 'styled-components'

const slideup = keyframes`
  0%   {opacity: 0; top: 60%;}
  100% {opacity: 1; top: 50%;}
`

const slideup2 = (top0, top100) =>keyframes`
  0%   {opacity: 0; top: ${top0};}
  100% {opacity: 1; top: ${top100};}
`

export const StyledHomepage = styled.div`
  text-align: center;
`

export const Image = styled.div`
  background: url(${props => props.imgUrl}) repeat center center fixed; 
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

export const Title = styled.h1`
  font-family: 'Baloo Tamma 2', cursive;
  font-weight: 400;
  font-size: 64px;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  animation: ${slideup} 2s;

  @media (max-width: 600px) {
    line-height: 70px;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`

export const SubTitle = styled.h2`
  font-family: 'Baloo Tamma 2', cursive;
  font-weight: 400;
  font-size: 40px;
  position: absolute; 
  top: 65%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  animation: ${slideup2("75%", "65%")} 2s;  

  @media (max-width: 600px) {
    line-height: 40px;
    top: 70%;
    animation: ${slideup2("80%", "70%")} 2s;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`

// FONTS
  /* font-family: 'Delius', cursive; */
  /* font-family: 'Patrick Hand SC', cursive; */
  /* font-family: 'Coming Soon', cursive; */
  /* font-family: 'Rancho', cursive; */
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Amatic SC', cursive; */
  /* font-family: 'Staatliches', cursive; */