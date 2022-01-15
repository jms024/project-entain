import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    
     @media ${(props) => props.theme.breakpoint.md}{
        flex: 4;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${(props) => props.theme.spacing} 0;
`

export const Thumb = styled.div`
    flex: 1;
    height: 100px;
    flex-basis: 100%;
    
    @media ${(props) => props.theme.breakpoint.sm}{
        flex-basis: 50%;
    }
    @media ${(props) => props.theme.breakpoint.md}{
        flex-basis: 50%;
    }
    @media ${(props) => props.theme.breakpoint.lg}{
        flex-basis: 25%;
    }
`