const size = {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1200px'
};

export default {
    color: {
        main: '#DFECF2',
        darker: '#C1CCD1'
    },
    size,
    breakpoint: {
        xs: `(min-width: ${size.xs})`,
        sm: `(min-width: ${size.sm})`,
        md: `(min-width: ${size.md})`,
        lg: `(min-width: ${size.lg})`
    },
    spacing: '16px'
}