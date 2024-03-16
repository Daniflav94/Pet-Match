import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    padding-top: 5rem;
    background-color: ${props => props.theme.colors.snow};
`;

export const ContainerSearch = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    width: 100vw;
`;

export const ContainerIcon = styled.button`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 2rem;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.img`
    width: 4rem;
`;

export const IconText = styled.span`
    font-size: small;
    color: ${props => props.theme.colors.brown}; ;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;