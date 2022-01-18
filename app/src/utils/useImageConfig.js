import { useDispatch, useSelector } from "react-redux";

import { storeImageConfig } from '../actions/imageConfig.action';

export default () => {
    const dispatch = useDispatch(),
        imageConfig = useSelector((state) => state.imageConfig);

    return {
        set: (data) => dispatch(storeImageConfig(data)),
        get: imageConfig
    }
}