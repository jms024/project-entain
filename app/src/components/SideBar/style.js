import styled from "styled-components";

const menuWidth = 150;

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    justify-content: center;  
    position: relative;
    background-color: #1b1c1e;
    color: #aeafb3;
            
    @media ${(props) => props.theme.breakpoint.md}{
        flex-basis: ${({open}) => open ? menuWidth+'px' : '0'};
    }
`

export const Tab = styled.div`
    padding: 15px 10px;
    cursor: pointer;
    &:hover {
        background-color: #323335;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;

    @media ${(props) => props.theme.breakpoint.md}{
        width: ${({open}) => open ? '100%' : '0'};
        flex-direction: column;
    }
`

export const Handle = styled.div`   
    display: none;
    @media ${(props) => props.theme.breakpoint.md} {
       display: flex;
       justify-content: flex-end;
       align-items: center;
       width: 50px;
       height: 50px;
       position: fixed;
       left: ${(props) => props.open ? menuWidth-25 : '-25'}px;
       top: 50%;
       transform: translateY(-50%);
       background-color: #7f84a0;
       color: #FFF;
       border-radius: 10px;
       cursor: pointer;
       opacity: ${(props) => props.open ? 1 : 0.37};
       &:hover {
            box-shadow: 0 0 5px #000;
            opacity: 0.75;
       }
       & .icon {
            transform: ${(props) => props.open ? 'rotate(180deg)' : 'unset'};
       }
   }
`