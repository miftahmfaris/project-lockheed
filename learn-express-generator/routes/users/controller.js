const users = require("../../models/users");

module.exports = {
    getAll: (req, res) => {
        res.send(users);
    },
    getById: (req, res) => {
        const { id } = req.params;

        const filterById = users.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        });

        res.status(200).send({
            message: `Data user with id ${id}`,
            data: filterById[0]
        });
    },

    postData: (req, res) => {
        try {
            const data = req.body;
            const file = req.file;

            users.push({ ...data, avatar: file.path });

            res.status(200).send({
                message: "New data is successfully added",
                data: users
            });
        } catch (error) {
            console.log(error);
        }
    }
};
