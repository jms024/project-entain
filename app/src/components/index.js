import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

import theme from "../style/theme";
import MainContainer from "./MainContainer";
import AppBar from './AppBar'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #FFF
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