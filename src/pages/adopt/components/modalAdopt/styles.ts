import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.snow};
  width: 30rem;
  max-height: 93vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5%;
  left: 30%;
  border-radius: 8px;
  gap: 0.5rem;
  overflow-y: auto;
`;

export const IconClose = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.brown};
`;

export const Subtitle = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;

export const PetImage = styled.img`
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.brown};
    margin: 0 auto;
`;

export const Form = styled.form`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DualInput = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const ButtonSubmit = styled.button`
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  padding: 0.5rem 2rem;
  width: 12rem;
  color: #FFFF;
  font-size: smaller;
  font-weight: 500;

  &:hover {
    background-color: #e5ac58;
  }
`;

export const ButtonCancel = styled.span`
display: flex;
justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  padding: 0.5rem 2rem;
  width: 12rem;
  color: ${(props) => props.theme.colors.yellow};
  font-size: smaller;
  font-weight: 500;
  

`;
