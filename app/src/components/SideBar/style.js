import styled from "styled-components";

const menuWidth = 150;

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    justify-content: flex-start;  
    position: relative;
    background-color: ${(props) => props.theme.color.secondary};
            
    @media ${(props) => props.theme.breakpoint.md}{
        flex: 0 0 ${({open}) => open ? menuWidth+'px' : '0'};
    }
`

export const Tab = styled.div`
    padding: 15px 10px;
    cursor: pointer;
    background-color: ${(props) => props.selected ? props.theme.color.hover : 'unset'};
    color: ${(props) => props.theme.color.text.primary};
    &:hover {
        background-color: ${(props) => props.theme.color.hover};
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
       z-index: 10;
       top: 50%;
       transform: translateY(-50%);
       background-color: ${(props) => (props.theme.color.primary)};
       color: ${(props) => (props.theme.color.text.secondary)};
       border-radius: 10px;
       cursor: pointer;
       opacity: ${(props) => props.open ? 0.90 : 0.75};
       box-shadow: 0 0 5px #000;
       &:hover {
            box-shadow: 0 0 10px #000;
            opacity: 0.90;
       }
       & .icon {
            transform: ${(props) => props.open ? 'rotate(180deg)' : 'unset'};
       }
   }
`