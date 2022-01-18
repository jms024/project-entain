import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: auto;
    
    &.no-results {
        justify-content: center;
        padding-top: ${(props) => props.theme.spacing}
    }
`

export const Card = styled.div`
    position: relative;
    flex: 1;
    height: auto;
    flex-basis: 100%;
    cursor: pointer;
    overflow: hidden;
    
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

export const Picture = styled.picture`
    display: flex;
    width: 100%;
    height: 100%;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
    
    & img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export const Title = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25%;
    padding: 10px;
    align-items: flex-end;
    font-size: 20px;
    text-align: center;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(27,28,30,0) 90%);
    color: #aeafb3;
`