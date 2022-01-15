import React, { useEffect } from 'react';

import { Container, Thumb } from "./style";
import useApi from "../../utils/useApi";

export default React.memo((props) => {
    const api = useApi();

    useEffect(() => {
        api.get({path: 'movies'})
            .then((data) => console.log(data));
    }, [])

    return(
        <Container>
            <Thumb>Movie 1</Thumb>
            <Thumb>Movie 2</Thumb>
            <Thumb>Movie 3</Thumb>
            <Thumb>Movie 4</Thumb>
            <Thumb>Movie 5</Thumb>
            <Thumb>Movie 6</Thumb>
            <Thumb>Movie 7</Thumb>
            <Thumb>Movie 8</Thumb>
            <Thumb>Movie 9</Thumb>
            <Thumb>Movie 10</Thumb>
            <Thumb>Movie 11</Thumb>
            <Thumb>Movie 12</Thumb>
        </Container>
    )
})