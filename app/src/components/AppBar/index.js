import React from 'react';

import ViewPortContainer from "../ViewportContainer";
import { Container, Field } from './style';

export default React.memo((props) => {
    return (
        <Container>
            <ViewPortContainer>
                <Field label="Movie title" />
            </ViewPortContainer>
        </Container>
    )
})