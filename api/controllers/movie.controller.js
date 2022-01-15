const db = require('../models');
const Movies = db.movies;

const dataMapping = {
    title: 'original_title',
    backdrop_path: 'backdrop_path',
    theMovieDbId: 'id',
    overview: 'overview',
    release_date: 'release_date'
}

const sanitizeMovie = (datum) => {
    return {
        title: datum[dataMapping.title],
        backdrop_path: datum[dataMapping.backdrop_path],
        theMovieDbId: datum[dataMapping.theMovieDbId],
        overview: datum[dataMapping.overview],
        release_date: datum[dataMapping.release_date]
    }
}

exports.discover = (req, res) => {
    const { query } = req,
        {filter, sort} = query;
    let where, order;

    if (filter) where = JSON.parse(filter);
    if (sort) order = [JSON.parse(sort)];

    Movies.findAll({where, order})
        .then((data) => {
            res.set('Content-Range', data.length);
            res.set('Access-Control-Expose-Headers', 'Content-Range');
            return res.send(data);
        })
        .catch((error) => res.status(500).send(`Something went wrong: ${error.message}`));
}

exports.findByTitle = (req, res) => {
    const { title } = req.query;

    if (!title) return res.status(400).send('Title param is required');

    return api.get('search/movie',{query: title})
        .then(({data}) => {
            const responseData = data.results.map((datum) => (
                sanitizeMovie(datum)
            ));
            res.send(responseData);
        });
}

exports.findByGenre = (req, res) => {
    const { genre } = req.query;

    if (!genre) return res.status(400).send('Genre param is required');

    return api.get('discover/movie', {query: {with_genres: genre}})
        .then(({data}) => {
            const responseData = data.results.map((datum) => (
                sanitizeMovie(datum)
            ));
            res.send(responseData);
        });
}