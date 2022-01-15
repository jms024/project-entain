import React from 'react';

import Thumb from './Thumb';
import { Card, Title } from "./style";

export default React.memo((props) => {
    const { movie } = props;

    return (
        <Card>
            <Thumb movie={movie} />
            <Title>{ movie.title }</Title>
        </Card>
    )
})