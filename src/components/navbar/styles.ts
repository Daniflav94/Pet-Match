import styled from "styled-components";

export const Nav = styled.nav`
  display: fixed;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.blue};
`;

export const Ul = styled.ul`
  display: flex;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  margin: 0
`;

export const Logo = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const Img = styled.img`
  width: 3rem;
`;

export const LogoText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.brown}
`;

export const Span = styled.span`
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  color: aliceblue;
  z-index: 99999;
  padding-bottom: 0.5rem;
  letter-spacing: 0.1rem;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.yellow};
  }
`;
