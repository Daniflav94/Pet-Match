import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 5rem;
  background-color: ${(props) => props.theme.colors.nude2};
  font-family: "Poppins", sans-serif;
`;

export const ContainerCards = styled.section`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4rem;
`;
