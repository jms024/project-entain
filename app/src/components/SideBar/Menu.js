import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import { Menu, Tab } from './style';
import useApi from "../../utils/useApi";
import useFilter from "../../utils/useFilter";

export default React.memo((props) => {
    const [genres, setGenres] = useState(null),
        isOpen = useSelector((state) => state.sideBar),
        api = useApi(),
        filter = useFilter();

    useEffect(() => {
        api.get({path: 'genres'})
            .then((data) => setGenres(data))
            .catch((err) => alert(err.message));
    }, [])

    const handleClick = (genre) => {
        filter.set('genre', genre)
    }

    return (
        <Menu open={isOpen}>
            <Tab
                selected={!filter.get.genre}
                onClick={() => handleClick('')}
                key="any">Any</Tab>
            { !genres
                ? <CircularProgress style={{alignSelf: 'center'}}/>
                : genres.map(({name, id}) => (
                    <Tab
                        selected={filter.get.genre === id}
                        onClick={() => handleClick(id)}
                        key={`${id}`}>{ name }</Tab>
                )) }
        </Menu>
    )
})

