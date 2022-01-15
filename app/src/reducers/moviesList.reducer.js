export const moviesList = (state = [], {type, payload=null}) => {
    switch (type) {
        case 'SET_MOVIES_LIST':
            return payload;
        default:
            return state;
    }
}