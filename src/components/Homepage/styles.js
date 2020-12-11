import styled, { keyframes } from 'styled-components'

const slideup = keyframes`
  0%   {opacity: 0; top: 60%;}
  100% {opacity: 1; top: 50%;}
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
  font-family: 'Delius', cursive;
  /* font-family: 'Patrick Hand SC', cursive; */
  /* font-family: 'Coming Soon', cursive; */
  /* font-family: 'Rancho', cursive; */
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Amatic SC', cursive; */
  /* font-family: 'Baloo Tamma 2', cursive; */


  font-size: 64px;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  animation: ${slideup} 4s;
`