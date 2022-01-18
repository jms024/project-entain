import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

export const BackDrop = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 15;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    background-color: #000;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    width: 75%;
    height: 75%;
`

export const Title = styled.div`
    display: flex;
    flex: 0 0 100px;
    align-items: center;
    padding: ${(props) => props.theme.spacing};
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.text.primary};
    font-size: 48px;
`

export const Banner = styled.div`  
    width: 100%;
    margin: auto;
    
    @media ${(props) => props.theme.breakpoint.md}{
        width: 500px;
    }
    
    & img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: auto;  
    padding: ${(props) => props.theme.spacing};
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.text.secondary};
`

export const Button = styled(MuiButton)`
    align-self: flex-start;
    margin-top: auto;
`