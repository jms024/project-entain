import React from 'react';

import Thumb from './Thumb';
import { Card, Title } from "./style";

export default React.memo((props) => {
    const { movie, onClick } = props;

    return (
        <Card onClick={() => onClick(movie)}>
            <Thumb movie={movie} />
            <Title>{ movie.title }</Title>
        </Card>
    )
})