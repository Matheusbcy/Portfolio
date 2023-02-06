import { Box } from "@mui/system";
import styled from "styled-components";

export const ContentProject = styled.div`
  height: 68rem;
  width: 100%;
  background-color: #22282f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1520px) {
    height: 110rem;
  }
  @media (max-width: 800px) {
    height: 130rem;
  }
`;
export const StyledBox = styled(Box)`
  width: 100%;
  margin-left: 290px;
  @media (max-width: 1000px) {
    margin-left: 170px;
  }
  @media (max-width: 420px) {
    margin-left: 80px;
  }
`;
export const StyledDivProject = styled.div``;

export const CardsProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
`;
export const Card = styled.div`
  height: 600px;
  width: 480px;
  overflow: hidden;
  background-color: #2d343f;
  border-radius: 20px;
  margin-bottom: 20px;
  transition: transform 100ms ease-in-out;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1000px) {
    height: 500px;
    width: 380px;
  }
  @media (max-width: 420px) {
    height: 400px;
    width: 300px;
  }
`;
export const CardStack = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
   @media (max-width: 420px) {
    margin-right: 4px;
  }
`;
export const P = styled.p`
  margin-right: 4px;
  padding: 10px;
  background-color: #5d6c83;
  border-radius: 10px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 1000px) {
    padding: 4px;
  }
   @media (max-width: 420px) {
    font-size: 12px;
  }
`;
export const ContentDiv = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  @media (max-width: 420px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const TitlePrincipal = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-size: 34px;
  margin-top: 10px;
  font-weight: bold;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 420px) {
    font-size: 16px;
  }
`;
export const ContentImage = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  height: 260px;
`;
export const ContentLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 30px;
  margin-top: 25px;
  margin-bottom: 25px;
  @media (max-width: 420px) {
    margin-top: 0px;
    margin-bottom: 35px;
  }
`;
export const ButtonLink = styled.button`
  padding: 10px;
  margin-top: ${(props) => props.margin};
  height: 50px;
  width: 100px;
  border: none;
  background-color: ${(props) => props.color};
  color: white;
  font-family: "Space Grotesk", sans-serif;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const LinkR = styled.a`
  color: white;
  text-decoration: none;
`;
export const TitleMaior2 = styled.h1`
  font-size: 52px;
  width: 800px;
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 1066px) {
    font-size: 40px;
    width: 600px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    font-size: 30px;
    width: 300px;
  }
`;
