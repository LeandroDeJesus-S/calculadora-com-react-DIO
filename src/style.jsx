import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    background-color: rgba(20, 20, 20, .6)
`;

export const Calculator = styled.div`
    width: 18rem;
    padding: .5rem;
    border: 1px solid rgba(36, 34, 34, 0.34)
`;


export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`