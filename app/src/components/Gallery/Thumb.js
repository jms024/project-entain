import React from 'react';

import useImageConfig from "../../utils/useImageConfig";
import theme from "../../style/theme";
import { Picture } from "./style";

export default React.memo((props) => {
    const { movie: {title, backdrop_path} } = props,
        imageConfig = useImageConfig().get.images;

    if (!imageConfig) return null;

    const { base_url } = imageConfig;

    return (
        <Picture>
            <source
                srcSet={`${base_url}w500${backdrop_path}`}
                media={theme.breakpoint.xs} />
            <source
                srcSet={`${base_url}w780${backdrop_path}`}
                media={theme.breakpoint.md} />
            <img
                src={`${base_url}w500${backdrop_path}`}
                alt={title} />
        </Picture>
    )
})