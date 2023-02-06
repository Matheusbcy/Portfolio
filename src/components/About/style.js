import styled from "styled-components";
import { Box } from "@mui/material";

export const AboutContainer = styled.div`
  width: 100vw;
  height: 65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #22282f;
  color: white;
    @media (max-width: 1300px) {
    height: 85rem;
  }
    @media (max-width: 814px) {
    height: 95rem;
  }
  @media (max-width: 550px) {
    height: 80rem;
  }
`;
export const StyledBox = styled(Box)`
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
  @media (max-width: 814px) {
    margin-left: 100px;
  }
  @media (max-width: 420px) {
    margin-left: 180px;
  }
`;
export const H2 = styled.h2`
  width: 530px;
  margin-top: 20px;
  color: #c3cad5;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 100;
  @media (max-width: 814px) {
    width: 400px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
export const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 52px;
  color: white;
  width: 600px;
  font-weight: bolder;
  margin-top: 20px;
  @media (max-width: 814px) {
    font-size: 43px;
    width: 500px;
  }
  @media (max-width: 550px) {
    font-size: 33px;
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
export const ContainerRigth = styled.div`
  margin-top: 82px;
  margin-left: 100px;
  @media (max-width: 1300px) {
    margin-left: 0px;
  }
`;
export const TitleAbout = styled.h1`
  font-size: 20px;
`;
export const SpanTittle = styled.span`
  color: blue;
`;
export const SpanNumber = styled.span`
  font-size: 76px;
  font-weight: bolder;
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 420px) {
    font-size: 33px;
  }
`;
export const P = styled.p`
  width: 120px;
  font-size: 20px;
  font-weight: bolder;
  font-family: "Space Grotesk", sans-serif;
  margin-left: 20px;
`;
export const ContainerQtdProjec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  @media (max-width: 550px) {
    margin-left: 30px;
  }
`;
export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  margin-left: 10px;
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
  transition: transform 100ms ease-in-out;
  font-family: "Space Grotesk", sans-serif;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
export const HrMoreAbout = styled.hr`
  width: 220px;
  margin-top: 10px;
  height: 2px;
  border-color: #2d343f;
`;
export const WrapperAboutMore = styled.div`
  &:hover ${HrMoreAbout} {
    border-color: white;
  }
`;
export const HrF = styled.hr`
  border-color: gray;
  width: 1300px;
  margin-top: 200px;
  @media (max-width: 814px) {
    width: 500px;
  }
  @media (max-width: 420px) {
    width: 350px;
  }
  @media (max-width: 1300px) {
    width: 1000px;
  }
`;
export const StyledDiv = styled.div`
  margin-left: 100px;
    @media (max-width: 814px) {
    margin-left: 10px;
  }
`