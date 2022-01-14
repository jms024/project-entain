module.exports = (app, modelName) => {
    const controller = require("../controllers/crud.controller");

    app.post(`/${modelName}`, (req, res) => controller.create(req, res, modelName));
    app.get(`/${modelName}`, (req, res) => controller.findAll(req, res, modelName));
    app.get(`/${modelName}/:id`, (req, res) => controller.findByPk(req, res, modelName));
    app.put(`/${modelName}/:id`, (req, res) => controller.update(req, res, modelName));
    app.delete(`/${modelName}/:id`, (req, res) => controller.delete(req, res, modelName));
};