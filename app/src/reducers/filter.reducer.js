export const filter = (state = {}, {type, payload= {}}) => {
    switch (type) {
        case 'SET_FILTER':
            return payload;
        default:
            return state;
    }
}