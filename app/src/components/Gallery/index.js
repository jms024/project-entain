import React, { useEffect, useState } from 'react';
import { LinearProgress } from "@mui/material";

import { Container, Thumb } from "./style";
import useApi from "../../utils/useApi";
import useImageConfig from "../../utils/useImageConfig";

export default React.memo((props) => {
    const [movies, setMovies] = useState(null),
        api = useApi(),
        imageConfig = useImageConfig();

    useEffect(() => {
        Promise.all([
            api.get({path: 'movies'}),       // 0
            api.get({path: 'configuration'}) // 1
        ]).then((values) => {
            setMovies(values[0]);
            imageConfig.store(values[1]);
        })
    }, [])

    console.log(movies);
    console.log('imageConfig');
    console.log(imageConfig);

    if (!movies) return <LinearProgress />

    return(
        <Container>
            { movies.map((movie) => (
                <Thumb key={`${movie.id}`}>
                    { movie.title }
                </Thumb>
            )) }
        </Container>
    )
})