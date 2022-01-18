import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ArrowIcon from '@mui/icons-material/ArrowForwardIos';

import { openCloseSideBar } from '../../actions/sidebar.action';
import { Handle } from "./style";

export default React.memo((props) => {
    const dispatch = useDispatch(),
        isOpen = useSelector((state) => state.sideBar);

    const handleClick = () => {
        dispatch(openCloseSideBar());
    }

    return (
        <Handle onClick={handleClick} open={isOpen}>
            <ArrowIcon fontSize="medium" className="icon" />
        </Handle>
    )
})