import { combineReducers } from 'redux';

import { sideBar } from './sidebar.reducer';
import { imageConfig } from "./imageConfig.reducer";

export default combineReducers({
    sideBar,
    imageConfig
})