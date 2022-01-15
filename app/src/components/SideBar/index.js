import React from 'react';
import { useSelector } from "react-redux";

import Handle from './Handle';
import Menu from './Menu';
import { Container } from './style';

export default React.memo((props) => {
    const isOpen = useSelector((state) => state.sideBar);

    return (
        <Container open={isOpen}>
            <Handle />
            <Menu />
        </Container>
    )
})