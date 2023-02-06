import styled from "styled-components";

export const AppMain = styled.div`
  width: 100vw;
  height: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 1470px) {
    height: 110rem;
  }
  @media (max-width: 814px) {
    height: 90rem;
  }
  @media (max-width: 550px) {
    height: 80rem;
  }
  @media (max-width: 420px) {
    height: 85rem;
  }
`;
export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  overflow: hidden;
  @media (max-width: 1550px) {
    gap: 50px;
  }
  @media (max-width: 1470px) {
    flex-direction: column;
    margin-left: 90px;
  }
  @media (max-width: 810px) {
    margin-left: 30px;
  }
`;
export const Content = styled.div`
  @media (max-width: 1470px) {
    margin-right: 200px;
  }
  @media (max-width: 814px) {
    margin-left: 200px;
  }
`;
export const P = styled.p`
  width: 500px;
  margin-top: 20px;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  word-spacing: 4px;
  color: #c3cad5;
  @media (max-width: 550px) {
    font-size: 14px;
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
export const Tittle = styled.h1`
  width: 820px;
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
  font-size: 65px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  @media (max-width: 814px) {
    font-size: 43px;
    width: 400px;
  }
  @media (max-width: 420px) {
    font-size: 33px;
    width: 300px;
  }
`;
export const AbuotContent = styled.div`
  margin-bottom: 40px;
`;
export const WorkContent = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  font-family: "Space Grotesk", sans-serif;
  transition: transform 100ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;
export const HrAbout = styled.hr`
  width: 120px;
  margin-top: 10px;
  height: 2px;
  border-color: #2d343f;
`;
export const HrWork = styled.hr`
  margin-top: 10px;
  width: 160px;
  height: 2px;
  border-color: #2d343f;
`;
export const Hr = styled.hr`
  border-color: #2d343f;
`;
export const Wrapper = styled.div`
  &:hover ${HrAbout} {
    border-color: white;
  }
`;
export const WrapperWork = styled.div`
  &:hover ${HrWork} {
    border-color: white;
  }
`;
export const SubTitle = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 1.8px;
  font-size: 18px;
  word-spacing: 4px;
  font-weight: bold;
`;
export const FollowContent = styled.div`
  margin-top: 40px;
`;
export const ImagemAvatar = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
  border: 2px solid #075fe4;
  margin-left: 120px;
  border-radius: 50%;
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
  @media (max-width: 814px) {
    margin-left: 80px;
    width: 200px;
    height: 200px;
  }
  @media (max-width: 420px) {
    margin-left: 40px;
  }
`;
export const ContainerRedes = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const StyledLink = styled.a`
  transition: opacity 0.3s ease-in-out;
  opacity: 0.3;
  color: white;
  &:hover {
    opacity: 1;
  }
`;
