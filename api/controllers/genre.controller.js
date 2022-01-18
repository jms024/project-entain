const db = require('../models');
const Genres = db.genres;

const { getFilterParams, getSortParams, getLimitOffset } = require("../utils/queryParams.util");

exports.findAll = (req, res) => {
    const { filter, sort, range } = req.query;

    // Defaults
    let where = {};
    let order = [['id', 'DESC']];
    let limit = null;
    let offset = null;

    if (filter) where = getFilterParams(filter);
    if (sort) order = getSortParams(sort);
    if (range) {
        limit = getLimitOffset(range).limit;
        offset = getLimitOffset(range).offset;
    }

    Genres.findAll({
        where, order, limit, offset
    }).then((data) => {
        res.set('Content-Range', data.length);
        res.set('Access-Control-Expose-Headers', 'Content-Range');
        res.send(data);
    }).catch(({message}) => {
        res.status(500).send(`Error occurred: ${message}`);
    })
}

exports.findByPk = (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).send('ID param is required');

    Genres.findByPk(id)
        .then((data) => {
            if (!data) return res.status(404).send('Genre not found');
            res.send(data.toJSON());
        })
        .catch(({message}) => {
            res.status(500).send(`Error occurred: ${message}`);
        })
}