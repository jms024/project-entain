import React from 'react';

import { Container, Tab } from './style';

export default React.memo((props) => {

    return (
        <Container>
            <Tab>Genre 1</Tab>
            <Tab>Genre 2</Tab>
            <Tab>Genre 3</Tab>
        </Container>
    )
})