import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import {Menu, Tab} from './style';
import useApi from "../../utils/useApi";

export default React.memo((props) => {
    const [genres, setGenres] = useState(null),
        isOpen = useSelector((state) => state.sideBar),
        api = useApi();

    useEffect(() => {
        api.get({path: 'genres'})
            .then((data) => setGenres(data))
            .catch((err) => alert(err.message));
    }, [])

    return (
        <Menu open={isOpen}>
            { !genres
                ? <CircularProgress style={{alignSelf: 'center'}}/>
                : genres.map(({name, id}) => (
                    <Tab key={`${id}`}>{ name }</Tab>
                )) }
        </Menu>
    )
})

