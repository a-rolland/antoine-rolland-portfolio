import styled from "styled-components";

export const StyledAbout = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: auto;
  background-color: #181818;
`;

export const Title = styled.h1`
  font-family: "Baloo Tamma 2", cursive;
  font-weight: 400;
  font-size: 36px;
`;

export const SubTitle = styled.h2`
  font-family: "Baloo Tamma 2", cursive;
  font-weight: 400;
  font-size: 24px;
  font-style: italic;
  margin: 0;
`;

export const Picture = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

export const Description = styled.div`
  min-width: 250px;
  max-width: 700px;

  p {
    font-family: "Baloo Tamma 2", cursive;
    text-align: justify;
    font-size: 16px;
    margin: 30px;

    &.picLegend {
      text-align: center;
    }

    @media (min-width: 601px) and (max-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 769px) and (max-width: 992px) {
      font-size: 20px;
    }

    @media (min-width: 993px) {
      font-size: 22px;
    }
  }
`;

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin-bottom: 50px;
`;

export const Skill = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    height: 100px;
    width: 100px;
    margin: 30px 30px 20px 30px;

    img {
      width: 100px;
    }
  }
`;

export const StyledExperiences = styled.div`
  max-width: 800px;
  margin: 0 20px;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 40px 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StructureLogo = styled.div`
  width: 125px;
  height: 125px;
  display: flex;
  align-items: center;

  img {
    width: 125px;
  }

  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const ExperienceDescription = styled.div`
  font-family: "Baloo Tamma 2", cursive;
  margin-left: 50px;

  h2,
  h3,
  h4 {
    margin: 0;
  }

  h2 {
    font-weight: 500;
  }

  h3 {
    font-weight: 400;
  }

  h4 {
    font-weight: 400;
    font-style: italic;
  }

  li {
    margin: 10px 0;
    text-align: justify;
  }

  @media (max-width: 400px) {
    text-align: center;
    margin-left: 0;

    ul {
      width: 250px;
      text-align: left;
    }
  }

  @media (min-width: 401px) and (max-width: 600px) {
    text-align: center;
    margin-left: 0;

    ul {
      width: 350px;
      text-align: left;
    }
  }

  @media (min-width: 601px) and (max-width: 768px) {
    ul {
      width: 350px;
      text-align: left;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    ul {
      width: 450px;
      text-align: left;
    }
  }

  @media (min-width: 993px) {
    ul {
      width: 500px;
      text-align: left;
    }
  }
`;
