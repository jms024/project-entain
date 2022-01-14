const db = require("../models");

exports.create = (req, res, model) => {
    const requestData = req.body,
        Model = db[model];

    // Validate data
    // ToDo

    // Write to database
    Model.create(requestData)
        .then((data) => res.status(201).send(data))
        .catch((err) => res.status(500).send(err));
};

exports.update = (req, res, model) => {
    const requestData = req.body,
        { id } = req.params,
        Model = db[model];

    if (!id) return res.status(400).send('Id param is required');

    // Validate data
    // ToDo

    Model.update(requestData, {where: {id}})
        .then((count) => {
            // Return updated record
            if (count == 1) {
                Model.findByPk(id)
                    .then((record) => res.send(record))
            }
        })
        .catch((err) => res.status(500).send(`Failed to update record: ${err.message}`));
};

exports.findAll = (req, res, model) => {
    const { query } = req,
        {filter, sort} = query,
        Model = db[model];
    let where, order;

    if (filter) where = JSON.parse(filter);
    if (sort) order = [JSON.parse(sort)];

    Model.findAll({where, order})
        .then((data) => {
            res.set('Content-Range', data.length);
            res.set('Access-Control-Expose-Headers', 'Content-Range');
            return res.send(data);
        })
        .catch((error) => res.status(500).send(`Something went wrong: ${error.message}`));
}

exports.findByPk = (req, res, model) => {
    const { id } = req.params,
        Model = db[model];

    if (!id) return res.status(400).send('Id param is required');

    Model.findByPk(id)
        .then((data) => {
            if (!data) return res.status(404).send(`${id} in ${model} does not exist`);
            return res.send(data);
        })
        .catch((error) => res.status(500).send(`Something went wrong: ${error.message}`));
}

exports.delete = (req, res, model) => {
    const { id } = req.params,
        Model = db[model];

    if (!id) return res.status(400).send('Id param is required');

    Model.destroy({where: {id}})
        .then((count) => {
            if (count < 1) return res.status(404).send(`${id} in ${model} does not exist`)
            return res.send(`Record ${id} in ${model} deleted successfully`)
        })
        .catch((err) => res.status(500).send(`Failed to delete: ${err.message}`))
}