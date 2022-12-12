import styled from "styled-components";

export const StyledWorks = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: auto;
  background-color: #181818;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const StyledProject = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 350px;
  margin: 70px 0;

  @media (min-width: 600px) and (max-width: 768px) {
    width: 500px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 650px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const Title = styled.h1`
  font-family: "Baloo Tamma 2", cursive;
  font-weight: 400;
  font-size: 36px;
`;

export const Logo = styled.img`
  width: 200px;
  height: ${(props) => (props.taller ? "62px" : "50px")};
  margin-right: 20px;

  @media (min-width: 600px) and (max-width: 992px) {
    width: 300px;
    height: ${(props) => (props.taller ? "93px" : "75px")};
  }

  @media (min-width: 992px) {
    width: 400px;
    height: ${(props) => (props.taller ? "125px" : "100px")};
  }
`;

export const Paragraph = styled.p`
  font-family: "Baloo Tamma 2", cursive;
  text-align: justify;
  font-size: 16px;
  margin: 30px;

  &.stack,
  &.bootcamp,
  &.role,
  &.maintened {
    margin-top: 0;
    margin-right: auto;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 22px;
  }
`;
