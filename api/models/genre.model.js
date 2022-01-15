module.exports = (sequelize, Sequelize) => {
    return sequelize.define("genre", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};