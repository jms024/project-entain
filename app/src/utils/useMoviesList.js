import { useDispatch, useSelector } from "react-redux";

import { setMoviesList } from '../actions/moviesList.action';

export default () => {
    const dispatch = useDispatch(),
        moviesList = useSelector((state) => state.moviesList);

    return {
        set: (data) => dispatch(setMoviesList(data)),
        get: moviesList
    }
}