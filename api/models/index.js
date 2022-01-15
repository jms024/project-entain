const dbConfig = require("../config/db.config.json");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    define: {
        timestamps: false
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movie.model")(sequelize, Sequelize);
db.genres = require("./genre.model")(sequelize, Sequelize);

// Relationships
db.movie_genres = sequelize.define('Movie_Genre', {}, { timestamps: false });
db.movies.belongsToMany(db.genres, { through: db.movie_genres });
db.genres.belongsToMany(db.movies, { through: db.movie_genres });

module.exports = db;