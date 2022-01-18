module.exports = (sequelize, Sequelize) => {
    return sequelize.define("movie", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        backdrop_path: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        theMovieDbId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        overview: {
            type: Sequelize.TEXT
        },
        release_date: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
};