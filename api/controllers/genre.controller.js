const db = require('../models');
const Genre = db.genre;

const api = require('../utils/api.util');

const writeToDb = (datum) => {
    return Genre.findOrCreate({
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