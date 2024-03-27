import styled  from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: auto;
  padding-top: 5rem;
  font-family: "Poppins", sans-serif;
  background-size: contain;
`;

export const ContainerRegister = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.snow};
  gap: 2rem;
`;

