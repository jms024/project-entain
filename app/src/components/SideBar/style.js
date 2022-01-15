import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
        
    @media ${(props) => props.theme.breakpoint.md}{
        flex: 1;
    }
`

export const Tab = styled.div`
    height: 30px;
`