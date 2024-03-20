import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.snow};
`;

export const ContainerImage = styled.div`
  min-width: 40rem;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerLogin = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 5rem;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.blue};
`;

export const Text = styled.span`
    font-family: "Poppins", sans-serif;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    text-align: center;
    color: ${(props) => props.theme.colors.gray};
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

export const Button = styled.button`
  width: 100%;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 8px;
  padding: 0.5rem 0;
  color: #FFFF;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

export const TextSignUp = styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
`;

export const ButtonSignUp = styled.button`
    color:  ${props => props.theme.colors.yellow};
    font-weight: 600;
`;