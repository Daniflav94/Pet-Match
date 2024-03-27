import styled from "styled-components";

type Props = {
  image: string;
};

export const Container = styled.section`
  width: 100vw;
  height: auto;
  padding-top: 5rem;
  font-family: "Poppins", sans-serif;
  background-size: contain;
`;

export const Background = styled.div<Props>`
  background-image: url(${(props) => props.image});
  position: absolute;
  width: 100vw;
  height: 78%;
  opacity: 0.1;
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
