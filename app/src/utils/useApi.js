import axios from 'axios';

const config = require('../config/api.config.json');

export default () => {
    const instance = axios.create({
        baseURL: config.url
    });

    const get = ({path, params, id=null}) => {
        if (!path) return Promise.reject();
        return instance.get(`/${path}${id ? '/'+id : ''}`, {params})
            .then(({data}) => {
                return data;
            })
    }

    const create = ({path, data}) =>{
        if (!path || !data) return false
        return instance.post(`/${path}`, data)
            .then(({data}) => {
                return data;
            })
    }

    const update = ({path, id, data}) => {
        if (!path || !id || !data) return false
        return instance.put(`/${path}`, data)
            .then(({data}) => {
                return data;
            })
    }

    const remove = ({path, id}) => {
        if (!path || !id) return false
        return instance.delete(`/${path}${id ? '/'+id : ''}`)
            .then(({data}) => {
                return data;
            })
    }

    return {
        get, create, update, remove
    }
}