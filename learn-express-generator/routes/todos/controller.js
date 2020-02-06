const todos = require("../../models/todos");

module.exports = {
    getAll: (req, res) => {
        res.status(200).send({
            message: "Welcome to todos route",
            data: todos
        });
    },
    getById: (req, res) => {
        res.status(200).send({ message: "Todos route by id" });
    },
    getByUsername: (req, res) => {
        res.status(200).send({ message: "Todos route by username" });
    }
};
