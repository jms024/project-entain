export const imageConfig = (state = {}, {type, payload=null}) => {
    switch (type) {
        case 'STORE_IMAGE_CONFIG':
            return payload;
        default:
            return state;
    }
}