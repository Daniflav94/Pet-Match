import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  background-color: ${props => props.theme.colors.snow};
  position: relative;
`;

export const ButtonArrow = styled.button`
  width: 2.5rem;
  position: absolute;
  top: 3rem;
  left: 3rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
    font-family: "Poppins", sans-serif;
    margin-bottom: 2rem;
`;

export const ContainerInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  gap: 1rem;
`;

export const DualInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 0.7rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 8px;
  padding: 0.5rem 0;
  color: #FFFF;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

