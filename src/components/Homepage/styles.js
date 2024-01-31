import styled, { keyframes } from "styled-components";

const slideup = (top0, top100) => keyframes`
  0%   {opacity: 0; top: ${top0};}
  100% {opacity: 1; top: ${top100};}
`;

const slideup2 = (top0, top100) => keyframes`
  0%   {opacity: 0; top: ${top0};}
  100% {opacity: 1; top: ${top100};}
`;

const slowlyAppears = keyframes`
  0%   {opacity: 0;}
  100% {opacity: 1;}
`;

const whiteToColor = keyframes`
  0%  {color: white;}
  100%  {color: #007eff;}
`;

export const StyledHomepage = styled.div`
  text-align: center;
`;

export const Image = styled.div`
  @media (max-width: 600px) {
    background: url(${(props) => props.$imgUrl.small}) repeat center center fixed;
    background-size: cover;
  }

  @media (min-width: 600px) {
    background: url(${(props) => props.$imgUrl.large}) repeat center center fixed;
    background-size: cover;
  }
  /* background: url(${(props) => props.$imgUrl}) repeat center center fixed; */
  /* background-size: cover; */
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: "Baloo Tamma 2", cursive;
  font-weight: 400;
  font-size: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  animation: ${slideup("60%", "50%")} 2s;

  @media (max-width: 600px) {
    line-height: 70px;
    top: 35%;
    animation: ${slideup("45%", "35%")} 2s;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Baloo Tamma 2", cursive;
  font-weight: 400;
  font-size: 40px;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #007eff;
  animation: ${slideup2("75%", "65%")} 2s, ${whiteToColor} 10s;

  @media (max-width: 600px) {
    line-height: 40px;
    top: 60%;
    animation: ${slideup2("70%", "60%")} 2s, ${whiteToColor} 10s;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const SocialMediaLinksContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const SocialMediaLink = styled.a`
  animation: ${slowlyAppears} 2s;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
