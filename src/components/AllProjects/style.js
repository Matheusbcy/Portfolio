import styled from "styled-components";

export const ContainerAllProjects = styled.div`
  height: 40rem;
  width: 100vw;
  background-color: #1b1f24;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  font-family: "Space Grotesk", sans-serif;
`;
export const PAllProjects = styled.p`
  width: 700px;
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  color: #e4e7ec;
  @media (max-width: 710px) {
    width: 500px;
  }
  @media (max-width: 580px) {
    font-size: 14px;
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 300px;
  }
`;
export const H1AllProjects = styled.h1`
  font-size: 74px;
  text-align: center;
`;
export const HrAllProjects = styled.hr`
  width: 200px;
  height: 10px;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 200px;
  @media (max-width: 410px) {
    margin-left: 100px;
  }
`;
export const ContainerCardAllProjects = styled.div`
  height: 260rem;
  background-color: #1b1f24;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    height: 230rem;
  }
  @media (max-width: 1080px) {
    height: 200rem;
  }
  @media (max-width: 870px) {
    height: 160rem;
    gap: 50px;
  }
  @media (max-width: 650px) {
    height: 270rem;
  }
`;
export const CardsAllProjects = styled.div`
  width: 582px;
  height: 708px;
  background-color: #2d343f;
  border-radius: 50px;
  overflow: hidden;
  opacity: 0.5;
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    opacity: 1;
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: 482px;
    height: 608px;
  }
  @media (max-width: 1080px) {
    width: 382px;
    height: 508px;
  }
  @media (max-width: 870px) {
    width: 300px;
    height: 400px;
  }
`;
export const DivCard = styled.div`
  overflow: hidden;
`;
export const PAtetion = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
  color: #1b1f24;
  text-align: center;
  padding: 10px;
  background-color: #f9a451;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #888;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px #888;
  }
  @media (max-width: 580px) {
    font-size: 14px;
  }
  @media (max-width: 410px) {
    font-size: 10px;
  }
`;
