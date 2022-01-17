module.exports = (app) => {
    const controller = require("../controllers/movie.controller");

    app.get(`/movies`, (req, res) => controller.findAll(req, res));
    app.get(`/movies/:id`, (req, res) => controller.findByPk(req, res));
    app.get(`/movies/genre/:genre`, (req, res) => controller.findByGenre(req, res));
};