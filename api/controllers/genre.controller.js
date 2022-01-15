const db = require('../models');
const Genres = db.genres;

exports.findAll = (req, res) => {
    const { query } = req,
        {filter, sort} = query;
    let where, order;

    if (filter) where = JSON.parse(filter);
    if (sort) order = [JSON.parse(sort)];

    Genres.findAll({where, order})
        .then((data) => {
            res.set('Content-Range', data.length);
            res.set('Access-Control-Expose-Headers', 'Content-Range');
            return res.send(data);
        })
        .catch((error) => res.status(500).send(`Something went wrong: ${error.message}`));
}

exports.findByPk = (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send('Id param is required');

    Genres.findByPk(id)
        .then((data) => {
            if (!data) return res.status(404).send(`${id} in Genres does not exist`);
            return res.send(data);
        })
        .catch((error) => res.status(500).send(`Something went wrong: ${error.message}`));
}