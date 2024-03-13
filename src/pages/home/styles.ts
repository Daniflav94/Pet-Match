import styled from "styled-components";

export const Pet = styled.img`
  position: absolute;
  bottom: 18rem;
  right: 5rem;
  width: 40rem;
  z-index: 9999;
`;

export const Section = styled.section`
  width: 100vw;
  padding-top: 2rem;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.blue};
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19rem;
`;

export const Div2 = styled.div`
  background-color: ${(props) => props.theme.colors.snow};
  z-index: 2;
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export const Title = styled.h2`
  font-size: 6rem;
  margin: 0;
  z-index: 9999;
  font-family: "Outfit", sans-serif;
  color: ${(props) => props.theme.colors.snow};
`;

export const Title2 = styled(Title)`
  color: ${(props) => props.theme.colors.brown};
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.brown};
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const Icon = styled.img`
  width: 4rem;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: flex-start;

`;

export const ContentIcons = styled(ContainerIcons)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 8rem;
`

export const Text = styled.span`
    font-size: 0.9rem;
    text-align: center;
    font-weight: 600;
`

export const Description = styled.span`
font-size: 0.8rem;
text-align: center;
font-weight: 500;
color: ${(props) => props.theme.colors.brown};
`

export const Divider = styled.div`
  width: 10rem;
  height: 0.07rem;
  background-color: ${(props) => props.theme.colors.yellow};
  margin-top: 1rem;
`;
