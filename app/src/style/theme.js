const size = {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1200px'
};

export default {
    color: {
        primary: '#C1CCD1',
        secondary: '#1b1c1e',
        hover: '#323335',
        text: {
            primary: '#aeafb3',
            secondary: '#1b1c1e'
        }
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