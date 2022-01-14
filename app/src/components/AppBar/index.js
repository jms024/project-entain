import React from 'react';
import styled from 'styled-components';
import {TextField} from "@mui/material";
import MainContainer from "../MainContainer";

const Container = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.darker};
`

const Field = styled(TextField)`
    width: 100%;
`

export default React.memo((props) => {
    return (
        <Container>
            <MainContainer>
                <Field label="Movie title" />
            </MainContainer>
        </Container>
    )
})