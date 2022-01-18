module.exports = (app) => {
    const controller = require("../controllers/genre.controller");

    app.get(`/genres`, (req, res) => controller.findAll(req, res));
    app.get(`/genres/:id`, (req, res) => controller.findByPk(req, res));
};