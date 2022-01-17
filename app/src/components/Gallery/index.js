import React, { useEffect, useState } from 'react';
import { LinearProgress } from "@mui/material";

import Card from './Card';
import { Container } from "./style";
import useApi from "../../utils/useApi";
import useImageConfig from "../../utils/useImageConfig";
import useMoviesList from "../../utils/useMoviesList";

export default React.memo((props) => {
    const api = useApi(),
        imageConfig = useImageConfig(),
        moviesList = useMoviesList();

    useEffect(() => {
        Promise.all([
            api.get({path: 'movies'}), // 0
            api.get({path: 'configuration'})    // 1
        ]).then((values) => {
            moviesList.set(values[0]);
            imageConfig.set(values[1]);
        })
    }, [])

    if (!moviesList.get) return <LinearProgress />

    return(
        <Container>
            { moviesList.get.map((movie) => (
                <Card movie={movie} key={movie.theMovieDbId}/>
            )) }
        </Container>
    )
})