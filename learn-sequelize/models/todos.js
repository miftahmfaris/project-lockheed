const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("todos", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    todo: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: "PROGRESS"
    },
    userId: {
        type: Sequelize.INTEGER
    }
});
