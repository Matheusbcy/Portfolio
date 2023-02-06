import styled from "styled-components";

export const ContainerFormacao = styled.div`
  width: 100vw;
  height: 63rem;
  background-color: #22282f;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 810px) {
    height: 70rem;
  }
  @media (max-width: 610px) {
    height: 85rem;
  }
`;
export const HrEducation = styled.hr`
  width: 1100px;
  border-color: #5d6c83;
  margin-bottom: 50px;
  @media (max-width: 1130px) {
    width: 900px;
  }
  @media (max-width: 910px) {
    width: 700px;
  }
  @media (max-width: 710px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
export const H1Education = styled.h1`
  font-size: 34px;
  &:hover {
    text-decoration: underline;
  }
`;
export const PEducation = styled.p`
  width: 800px;
  margin-top: 10px;
  font-size: 18px;
  color: #c3cad5;
  @media (max-width: 810px) {
    width: 600px;
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
export const ContainerEducation = styled.div`
  margin-bottom: 50px;
  width: 400px;
  margin-right: 44rem;
  @media (max-width: 1130px) {
    margin-right: 37rem;
  }
  @media (max-width: 1030px) {
    margin-right: 25rem;
  }
  @media (max-width: 890px) {
    margin-right: 16rem;
  }
  @media (max-width: 710px) {
    margin-right: 7rem;
  }
  @media (max-width: 510px) {
    margin-right: 0rem;
  }
  @media (max-width: 420px) {
    margin-left: 8rem;
  }
`;
export const Experience1 = styled.div`
  margin-bottom: 10px;
  @media (max-width: 810px) {
    width: 600px;
  }
  @media (max-width: 610px) {
    width: 400px;
    height: 450px;
  }
  @media (max-width: 420px) {
    width: 300px;
    height: 550px;
  }
`;
