import styled, { keyframes } from 'styled-components'

const slideup = keyframes`
  0%   {opacity: 0; top: 60%;}
  100% {opacity: 1; top: 50%;}
`

const slideup2 = keyframes`
  0%   {opacity: 0; top: 70%;}
  100% {opacity: 1; top: 60%;}
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
  /* font-family: 'Delius', cursive; */
  /* font-family: 'Patrick Hand SC', cursive; */
  /* font-family: 'Coming Soon', cursive; */
  /* font-family: 'Rancho', cursive; */
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'Baloo Tamma 2', cursive;
  /* font-family: 'Staatliches', cursive; */

  font-weight: 400;
  font-size: 64px;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  animation: ${slideup} 4s;
`

export const SubTitle = styled.h2`
  /* font-family: 'Delius', cursive; */
  /* font-family: 'Patrick Hand SC', cursive; */
  /* font-family: 'Coming Soon', cursive; */
  /* font-family: 'Rancho', cursive; */
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'Baloo Tamma 2', cursive;
  /* font-family: 'Staatliches', cursive; */

  font-weight: 400;
  font-size: 50px;
  position: absolute; 
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  animation: ${slideup2} 4s;
`