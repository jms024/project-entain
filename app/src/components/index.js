import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import mainReducer from '../reducers';
import theme from "../style/theme";
import FluidContainer from "./FluidContainer";
import AppBar from "./AppBar";
import Gallery from "./Gallery"
import SideBar from "./SideBar";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #FFF;
        font-family: Roboto, Arial, Helvetica, sans-serif; 
        box-sizing: border-box;
    }
`

const Body = styled.section`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    
    @media ${(props) => props.theme.breakpoint.md}{
        flex-direction: row;
    }
`

export default React.memo((props) => {
    const store = createStore(mainReducer);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppBar />
                <FluidContainer>
                    <Body>
                        <SideBar />
                        <Gallery />
                    </Body>
                </FluidContainer>
            </ThemeProvider>
        </Provider>
    )
})