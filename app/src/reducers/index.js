import { combineReducers } from 'redux';

import { sideBar } from './sidebar.reducer';
import { imageConfig } from "./imageConfig.reducer";
import { moviesList } from "./moviesList.reducer";

export default combineReducers({
    sideBar,
    imageConfig,
    moviesList
})