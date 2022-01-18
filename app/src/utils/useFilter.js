import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from '../actions/filter.action';
import useMoviesList from "./useMoviesList";
import useApi from "./useApi";

export default () => {
    const filter = useSelector((state) => state.filter) || {},
        dispatch = useDispatch(),
        moviesList = useMoviesList(),
        api = useApi();

    const getMoviesList = () => {
        api.get({path: 'movies', params: {filter}})
            .then((data) => moviesList.set(data))
            .catch((err) => alert(err))
    }

    useEffect(() => {
        getMoviesList();
    }, [JSON.stringify(filter)])

    const handleFilterChange = (filterName, filterValue) => {
        let newFilter = {...filter};
        if (!filterValue) {
            if (!newFilter[filterName]) return;
            delete newFilter[filterName];
            return dispatch(setFilter(newFilter));
        }
        newFilter[filterName] = filterValue;
        dispatch(setFilter(newFilter));
    }

    return {
        set: handleFilterChange,
        get: filter
    }
}