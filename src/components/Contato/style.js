import styled from "styled-components";

export const ContainerContato = styled.div`
  width: 100vw;
  height: 80rem;
  background-color: #1b1f24;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;
export const TitleContact = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 66px;
  font-weight: bolder;
`;
export const ContainerRedesContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PContact = styled.p`
  margin-bottom: 10px;
  font-size: 36px;
  font-weight: bold;
  height: 50px;
`;
export const ContainerForm = styled.div`
  height: 752px;
  width: 646px;
  background-color: #2d343f;
  margin-top: 50px;
  border-radius: 40px;
  display: flex;
`;
export const Form = styled.form`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-left: 100px;
`;

export const Label = styled.label`
  margin: 10px 0;
  width: 100%;
  font-size: 22px;
`;

export const Input = styled.input`
  margin: 10px 0;
  width: 400px;
  color: white;
  font-size: 18px;
  background: none;
  border-top: none;
  border-right: none;
  border-left: none;
  height: 40px;
  appearance: none;
  outline: none;
`;

export const TextArea = styled.textarea`
  margin: 10px 0;
  width: 100%;
  background: none;
  border-top: none;
  border-right: none;
  border-left: none;
  height: 100px;
  font-size: 18px;
  color: white;
`;

export const Submit = styled.input`
  margin-top: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  background: none;
  border: none;
  transition: transform 100ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
