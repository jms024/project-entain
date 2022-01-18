import React, { useEffect, useState } from 'react';
import { LinearProgress } from "@mui/material";

import Card from './Card';
import { Container } from "./style";
import MovieDetails from "../MovieDetails";
import useApi from "../../utils/useApi";
import useImageConfig from "../../utils/useImageConfig";
import useMoviesList from "../../utils/useMoviesList";

export default React.memo((props) => {
    const [selectedMovie, setSelectedMovie] = useState(null),
        api = useApi(),
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

    const handleClick = (movie) => {
        setSelectedMovie(movie)
    }

    if (!moviesList.get) return <LinearProgress />
    if (!moviesList.get.length) {
        return (
            <Container className="no-results">No movies found</Container>
        )
    }

    return(
        <Container>
            <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
            { moviesList.get.map((movie) => (
                <Card
                    movie={movie}
                    onClick={handleClick}
                    key={movie.theMovieDbId}/>
            )) }
        </Container>
    )
})