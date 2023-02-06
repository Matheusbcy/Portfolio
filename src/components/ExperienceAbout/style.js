import styled from "styled-components";

export const ContainerExperience = styled.div`
  width: 100vw;
  height: 60rem;
  background-color: #1b1f24;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Space Grotesk", sans-serif;
`;
export const H1Experience = styled.h1`
  font-size: 52px;
  width: 700px;
  margin-top: 20px;
  font-weight: bold;
  margin-right: 410px;
  @media (max-width: 710px) {
    font-size: 42px;
    width: 500px;
  }
  @media (max-width: 510px) {
    font-size: 32px;
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
export const HrExperience = styled.hr`
  width: 1100px;
  margin-top: 70px;
  border-color: #5d6c83;
  @media (max-width: 1100px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 510px) {
    width: 250px;
  }
`;
export const RowExperience = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  @media (max-width: 1130px) {
    margin-left: 100px;
  }
  @media (max-width: 1030px) {
    margin-left: 300px;
  }
  @media (max-width: 900px) {
    margin-left: 50rem;
  }
`;
export const Lista = styled.li`
  list-style: none;
  margin-right: ${(props) => props.margin};
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;
export const H2Experience = styled.h2`
  color: #c3cad5;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 50px;
  font-weight: 300;
`;
export const ContentDivExperiencei = styled.div`
  width: 700px;
  margin-right: 400px;
  ;
  @media (max-width: 1130px) {
    margin-left: 100px;
  }
  @media (max-width: 1030px) {
    margin-left: 300px;
  }
  @media (max-width: 900px ) {
    margin-top: 50px;
    margin-right: 19rem;
  }
  @media (max-width: 710px) {
    width: 500px;
  }
  @media (max-width: 510px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
