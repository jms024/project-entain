import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

import theme from "../style/theme";
import MainContainer from "./MainContainer";
import AppBar from "./AppBar";
import Gallery from "./Gallery"

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #FFF;
        font-family: Roboto, Arial, Helvetica, sans-serif; 
        box-sizing: border-box;
    }
`

export default React.memo((props) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppBar />
            <MainContainer>
                <Gallery />
            </MainContainer>
        </ThemeProvider>
    )
})