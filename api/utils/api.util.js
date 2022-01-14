const config = require('../config/api.config.json');
const axios = require('axios');

const instance = axios.create({
    baseURL: config.url,
    headers: {
        ['Authorization']: `Bearer ${config.token}`
    },
});

exports.get = (endpoint, params) => {
    return instance.get(`/${endpoint}`, { params: {...params} })
        .then((response) => response)
        .catch((error) => Promise.reject(error));
}