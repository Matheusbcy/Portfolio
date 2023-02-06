import styled from "styled-components";

export const ContainerSkills = styled.div`
  width: 100vw;
  height: 68rem;
  background-color: #1b1f24;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  @media (max-width: 1610px) {
    height: 90rem;
  }
  @media (max-width: 1302px) {
    height: 100rem;
  }
  @media (max-width: 1210px) {
    height: 120rem;
  }
  @media (max-width: 809px) {
    height: 100rem;
  }
  @media (max-width: 670px) {
    height: 180rem;
  }
`;
export const TitleSkill = styled.h1`
  font-size: 20px;
  font-family: "Space Grotesk", sans-serif;
`;
export const SpanSkill = styled.span`
  color: blue;
`;
export const TitleMaior = styled.h1`
  font-size: 52px;
  font-family: "Space Grotesk", sans-serif;
  @media (max-width: 1066px) {
    font-size: 40px;
    width: 300px;
  }
`;
export const Organization = styled.div`
  margin-left: 500px;
`;
export const GalleryCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;
`;
export const StyledDiv = styled.div`
  margin-right: 120px;
  @media (max-width: 1300px) {
    margin-left: 400px;
    width: 400px;
  }
  @media (max-width: 630px) {
    margin-left: 400px;
  }
  @media (max-width: 670px) {
    margin-left: 630px;
  }
  @media (max-width: 420px) {
    margin-left: 700px;
  }
`;
