export const sideBar = (state = false, {type, payload=null}) => {
    switch (type) {
        case 'OPEN_CLOSE_SIDEBAR':
            if (payload === null) return !state;
            return payload;
        default:
            return state;
    }
}