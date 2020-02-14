const { users } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await users.findAll();

            res.status(200).send({
                message: "Show all users data",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    addData: async (req, res) => {
        try {
            const result = await users.create(req.body);

            res.status(200).send({
                message: "Add new todo is successfully",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteData: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await users.destroy({ where: { id } });

            res.status(200).send({
                message: "Show all users data",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    updateData: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await users.update(req.body, { where: { id } });

            res.status(200).send({
                message: "Show all users data",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    }
};
