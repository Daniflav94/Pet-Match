import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: auto;
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

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;
`;
