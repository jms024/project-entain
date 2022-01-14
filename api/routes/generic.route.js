module.exports = (app, modelName) => {
    const controller = require("../controllers/crud.controller");

    app.post(`/${modelName}`, controller.create);
    app.get(`/${modelName}`, (req, res) => controller.findAll(req, res, modelName));
    app.get(`/${modelName}/:id`, (req, res) => controller.findByPk(req, res, modelName));
    app.put(`/${modelName}/:id`, controller.update);
    app.delete(`/${modelName}/:id`, controller.delete);
};