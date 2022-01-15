import React, { useEffect, useState } from 'react';
import { LinearProgress } from "@mui/material";

import Card from './Card';
import { Container } from "./style";
import useApi from "../../utils/useApi";
import useImageConfig from "../../utils/useImageConfig";

export default React.memo((props) => {
    const [movies, setMovies] = useState(null),
        api = useApi(),
        imageConfig = useImageConfig();

    useEffect(() => {
        Promise.all([
            api.get({path: 'movies/discover'}), // 0
            api.get({path: 'configuration'})    // 1
        ]).then((values) => {
            setMovies(values[0]);
            imageConfig.set(values[1]);
        })
    }, [])

    if (!movies) return <LinearProgress />

    return(
        <Container>
            { movies.map((movie) => (
                <Card movie={movie} key={movie.theMovieDbId}/>
            )) }
        </Container>
    )
})