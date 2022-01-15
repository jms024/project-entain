const db = require('../models');
const Genres = db.genres;

const api = require('../utils/api.util');

const writeToDb = (datum) => {
    return Genres.findOrCreate({
        where: { name: datum.name },
        defaults: {
            name: datum.name,
        }
    })
}

exports.populateDb = () => {
    return new Promise((resolve, reject) => {
        api.get('genre/movie/list')
            .then(({data: {genres}}) => {
                Promise.all(
                    genres.map((datum) => writeToDb(datum))
                ).then(() => {
                    console.log('Genre table populated')
                    resolve()
                })
            }).catch((err) => reject(`API request failed: ${err.message}`));
    })
}

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