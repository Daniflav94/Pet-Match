import styled from "styled-components";


export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 5rem;
  background-color: ${(props) => props.theme.colors.nude2};
  font-family: 'Poppins', sans-serif;
`;

export const ContainerSearch = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.snow};
  gap: 2rem;
`;

export const H3 = styled.h3`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.brown};
  font-size: 2rem;
`;

export const ContentIcon = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;

`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Icon = styled.img`
  width: 4rem;
`;

export const IconText = styled.span`
  font-size: small;
  color: ${(props) => props.theme.colors.brown};
  text-align: center;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ContentSelect = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const TitleSelect = styled.span`
    color: ${(props) => props.theme.colors.brown};
    font-size: 0.9rem;
    font-weight: 600;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.brown};
  padding: 0.5rem 2rem;
  border-radius: 8px;
  font-weight: 400;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #c27a56;
  }
`;