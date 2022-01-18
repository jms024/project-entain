const api = require('../utils/api.util');

module.exports = (app) => {
    app.get(`/configuration`, (req, res) => {
        api.get('configuration')
            .then(({data}) => {
                res.send(data);
            }).catch((err) => res.status(500).send(err.message))
    });
};