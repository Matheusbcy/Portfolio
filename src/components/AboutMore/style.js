import styled from "styled-components";

export const ContainerAboutMore = styled.div`
  width: 100vw;
  height: 63rem;
  background-color: #1b1f24;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 890px) {
    height: 80rem;
  }
`;
export const Row = styled.div`
  display: flex;
  margin-bottom: 150px;
  @media (max-width: 890px) {
    flex-direction: column;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    margin-left: 50px;
  }
   @media (max-width: 420px) {
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`;
export const PAboutMore = styled.p`
  width: 600px;
  margin-top: 60px;
  color: #c3cad5;
  font-size: 18px;
  @media (max-width: 1200px) {
    font-size: 15px;
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 660px) {
    width: 300px;
  }
`;
export const ImagemAbout = styled.img`
  margin-top: 90px;
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  border: 2px solid #075fe4;
  animation: border-color 3s linear infinite;
  @keyframes border-color {
    0% {
      border-color: red;
    }
    25% {
      border-color: blue;
    }
    50% {
      border-color: green;
    }
    75% {
      border-color: yellow;
    }
    100% {
      border-color: red;
    }
  }
  @media (max-width: 1200px) {
    width: 30vw;
    height: 30vw;
  }
  @media (max-width: 890px) {
    margin-left: 100px;
    width: 300px;
    height: 300px;
  }
  @media (max-width: 660px) {
    margin-left: 10px;
  }

`;
export const H1AboutMore = styled.h1`
  font-size: 64px;
  width: 560px;
  text-shadow: -4px -4px #075fe4, 4px 4px black;
  margin-top: 20px;
  font-weight: 800;
  text-shadow: -4px -4px #075fe4, 4px 4px black;
  animation: text-shadow-color 3s linear infinite;
  @keyframes text-shadow-color {
    0% {
      text-shadow: -2px -2px red, 2px 2px blue;
    }
    25% {
      text-shadow: -2px -2px blue, 2px 2px green;
    }
    50% {
      text-shadow: -2px -2px green, 2px 2px yellow;
    }
    75% {
      text-shadow: -2px -2px yellow, 2px 2px red;
    }
    100% {
      text-shadow: -2px -2px red, 2px 2px blue;
    }
  }
  @media (max-width: 1200px) {
    font-size: 54px;
    width: 500px;
  }
  @media (max-width: 660px) {
    font-size: 34px;
    width: 300px;
  }

`;
export const HrAboutMore = styled.hr`
  width: 200px;
  height: 10px;
  background-color: white;
  margin-bottom: 20px;
  margin-right: 360px;
  @media (max-width: 1200px) {
    margin-right: 300px;
  }
  @media (max-width: 660px) {
    display: none;
  }
`;
