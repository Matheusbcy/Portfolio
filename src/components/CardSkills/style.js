import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 370px;
  height: 350px;
  background-color: #2d343f;
  margin-top: 30px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 809px) {
    width: 300px;
    max-height: 270px;
  }
`;
export const ContainerInfoCard = styled.div`
  margin-left: 50px;
  @media (max-width: 809px) {
   margin-right: 40px;
  }
`;
export const TitleCardSkills = styled.h1`
  font-size: 38px;
  font-family: "Space Grotesk", sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 809px) {
    font-size: 28px;
    margin-top: 10px;
  }
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;
export const SpanIcon = styled.span`
  border-radius: 150px;
`;
export const P = styled.p`
  width: 280px;
  font-size: 18px;
  color: #c3cad5;
  font-weight: 100;
  @media (max-width: 809px) {
    font-size: 14px;
    width: 220px;
  }
`;
