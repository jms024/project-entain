const { Op } = require("sequelize");

// parameter format: {"title": "vault"}
exports.getFilterParams = (f, associates) => {
    const filters = JSON.parse(f);
    let filtersObject = {};

    Object.keys(filters).map((filter) => {
        if (associates.includes(filter)) return;
        filtersObject[filter] = {
            [Op.like]: `%${filters[filter]}%`
        }
    })

    return filtersObject;
};

// Parameter format: {"title": "asc"}
exports.getSortParams = (sort) => {
    const sortObj = JSON.parse(sort);
    let order = [];

    Object.keys(sortObj).map((key) => {
        order.push([key, sortObj[key]]);
    });

    return order;
};

// Parameter format: [0,9]
exports.getLimitOffset = (range) => {
    const rangeArray = JSON.parse(range),
        offset = rangeArray[0],
        limit = (rangeArray[1] - rangeArray[0]) + 1;
    return { offset, limit };
};