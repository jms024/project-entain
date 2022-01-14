const db = require('../models');
const Movies = db.movies;

const api = require('../utils/api.util');

exports.populateDb = () => {
    return new Promise((resolve, reject) => {
        api.get('discover/movie')
            .then(({data: {results}}) => {
                Promise.all(results.map((datum) => (
                    Movies.findOrCreate({
                        where: { title: datum.original_title },
                        defaults: {
                            title: datum.original_title,
                            backdrop_path: datum.backdrop_path,
                            theMovieDbId: datum.id,
                            overview: datum.overview,
                            release_date: datum.release_date
                        }
                    }).catch((err) => reject(`Db query failed: ${err.message}`))
                ) )).then(() => {
                    console.log('DB populated')
                    resolve()
                })
            })
            .catch((err) => reject(`API request failed: ${err.message}`));
    })
}