const db = require('../models');
const { Op } = require("sequelize");
const Movies = db.movies;
const Genres = db.genres;

const { getFilterParams, getSortParams, getLimitOffset } = require("../utils/queryParams.util");

exports.findAll = (req, res) => {
    const { filter, sort, range } = req.query,
        associates = ['genre'];

    // Defaults
    let where = {};
    let order = [['id', 'DESC']];
    let limit = null;
    let offset = null;

    // Handle associate filter
    let associateWhere = {};
    if (filter && JSON.parse(filter).genre) {
        associateWhere.id = JSON.parse(filter).genre;
    }

    // Handle other filters
    if (filter) where = getFilterParams(filter, associates);
    if (sort) order = getSortParams(sort);
    if (range) {
        limit = getLimitOffset(range).limit;
        offset = getLimitOffset(range).offset;
    }

    // Run query
    Movies.findAll({
        where, order, limit, offset,
        include: {
            model: Genres,
            through: {attributes: []},
            where: associateWhere,
            required: true
        }
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

    Movies.findByPk(id)
        .then((data) => {
            if (!data) return res.status(404).send('Movie not found');
            res.send(data.toJSON());
        })
        .catch(({message}) => {
            res.status(500).send(`Error occurred: ${message}`);
        })
}
