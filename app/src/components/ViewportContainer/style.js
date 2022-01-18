import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: ${(props) => props.theme.size.xs};
                
    @media ${(props) => props.theme.breakpoint.sm}{
        width: ${(props) => props.theme.size.sm};
    }
    @media ${(props) => props.theme.breakpoint.md}{
        width: ${(props) => props.theme.size.md};
    }
    @media ${(props) => props.theme.breakpoint.lg}{
        width: ${(props) => props.theme.size.lg};
    }
`;