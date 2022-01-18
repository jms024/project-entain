import React from 'react';

import { Wrapper, Container } from "./style";

export default React.memo((props) => {
    return (
        <Wrapper>
            <Container>
                {props.children}
            </Container>
        </Wrapper>
    )
});