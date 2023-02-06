import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: 30rem;
  width: 100vw;
  background-color: #1b1f24;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  border-top: 1px #5d6c83 solid;
  @media (max-width: 1040px) {
    height: 50rem;
  }
   @media (max-width: 420px) {
    height: 55rem;
  }
`;
export const Row1 = styled.div`
  display: flex;
  gap: 140px;
  margin-top: 80px;
  @media (max-width: 1120px) {
    gap: 50px;
  }
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;
export const Row2 = styled.div`
  display: flex;
`;
export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row3 = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 30px;
  }
`;
export const Imagem = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  @media (max-width: 600px) {
    margin-left: 30px;
  }
`;
export const H2 = styled.h1`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 34px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
export const PFooter = styled.p`
  margin-left: 20px;
  margin-top: 10px;
  color: #8895aa;
  font-size: 24px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledLink2 = styled.a`
  transition: opacity 0.3s ease-in-out;
  opacity: 0.3;
  color: white;
  &:hover {
    opacity: 1;
    transform: translateY(-5px);
  }
`;
export const ContainerRedes2 = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 24px;
  height: 50px;
  align-items: center;
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  font-size: 52px;
  @media (max-width: 600px) {
    font-size: 32px;
    margin-left: 30px;
  }
`;
export const Span = styled.span`
  color: #075fe4;
`;
export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PEmail = styled.p`
  font-size: 16px;
  margin-top: 35px;
  color: #c3cad5;
  font-weight: bold;
`;
export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 70px;
`;
export const PNumero = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
export const HrFooter = styled.hr`
  width: 1100px;
  margin-top: 90px;
  border-color: #5d6c83;
`;
export const Row4 = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 1120px) {
    justify-content: space-around;
  }
  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;
export const Row5 = styled.div`
  display: flex;
  gap: 20px;
`;
export const PNavFooter = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
export const PCopy = styled.p`
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  @media (max-width: 530px) {
    width: 400px;
}
`;
