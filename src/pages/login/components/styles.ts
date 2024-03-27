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
  top: 0;
  left: 3rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
    font-family: "Poppins", sans-serif;
    margin-bottom: 2rem;
`;

export const Form = styled.form`
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

export const InputFile = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: gray;
  border: 2px solid #e4e4e7;
  border-radius: 12px;
  padding: 0.8rem;

  &:hover {
    border: 2px solid ${props => props.theme.colors.gray2};
    transition: border 0.3s;
  }
`;

