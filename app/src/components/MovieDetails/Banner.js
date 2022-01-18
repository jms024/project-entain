import React from 'react';

import { Banner } from "./style";
import theme from "../../style/theme";
import useImageConfig from "../../utils/useImageConfig";

export default React.memo((props) => {
    const { backdrop_path, title } = props,
        imageConfig = useImageConfig().get.images;

    if (!imageConfig) return null;

    const { base_url } = imageConfig;

    return (
        <Banner>
            <picture>
                <source
                    srcSet={`${base_url}w500${backdrop_path}`}
                    media={theme.breakpoint.xs} />
                <source
                    srcSet={`${base_url}w780${backdrop_path}`}
                    media={theme.breakpoint.md} />
                <img
                    src={`${base_url}w500${backdrop_path}`}
                    alt={title} />
            </picture>
        </Banner>
    )
})