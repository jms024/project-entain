import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import {Menu, Tab} from './style';
import useApi from "../../utils/useApi";
import useMoviesList from "../../utils/useMoviesList";

export default React.memo((props) => {
    const [genres, setGenres] = useState(null),
        [selectedGenre, setSelectedGenre] = useState('any'),
        isOpen = useSelector((state) => state.sideBar),
        api = useApi(),
        moviesList = useMoviesList();

    useEffect(() => {
        api.get({path: 'genres'})
            .then((data) => setGenres(data))
            .catch((err) => alert(err.message));
    }, [])

    const handleClick = (genre) => {
        setSelectedGenre(genre);
        api.get({path: 'movies/genre', params: {genre}})
            .then((data) => console.log(data))
    }

    return (
        <Menu open={isOpen}>
            <Tab
                selected={selectedGenre === 'any'}
                onClick={() => handleClick('any')}
                key="any">Any</Tab>
            { !genres
                ? <CircularProgress style={{alignSelf: 'center'}}/>
                : genres.map(({name, id}) => (
                    <Tab
                        selected={selectedGenre === id}
                        onClick={() => handleClick(id)}
                        key={`${id}`}>{ name }</Tab>
                )) }
        </Menu>
    )
})

