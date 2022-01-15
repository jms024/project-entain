module.exports = (app) => {
    const controller = require("../controllers/movie.controller");

    app.get(`/movies/discover`, (req, res) => controller.discover(req, res));
    app.get(`/movies/find`, (req, res) => controller.findByTitle(req, res));
    app.get(`/movies/genre`, (req, res) => controller.findByGenre(req, res));
};