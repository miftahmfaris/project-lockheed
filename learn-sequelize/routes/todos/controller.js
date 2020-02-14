const { todos, users } = require("../../models");
const { sequelize } = require("../../config");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await sequelize.query(
                "SELECT `todos`.`id`, `todos`.`todo`, `todos`.`status`, `todos`.`userId`, `user`.`id` AS `user.id`, `user`.`name` AS `user.name`, `user`.`email` AS `user.email`, `user`.`password` AS `user.password`, `user`.`username` AS `user.username`, `user`.`status` AS `user.status` FROM `todos` AS `todos` LEFT OUTER JOIN `users` AS `user` ON `todos`.`userId` = `user`.`id`",
                {
                    type: sequelize.QueryTypes.SELECT
                }
            );

            // todos.belongsTo(users, { foreignKey: "userId" });
            // users.hasOne(todos, { foreignKey: "id" });

            // const result = await todos.findAll({
            //     include: [{ model: users }]
            // });

            res.status(200).send({
                message: "Show all todos data",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    addData: async (req, res) => {
        try {
            const result = await todos.create(req.body);

            res.status(200).send({
                message: "Add new todos is successfully",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteData: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await todos.destroy({ where: { id } });

            res.status(200).send({
                message: "Show all todos data",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    updateData: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await todos.update(req.body, { where: { id } });

            res.status(200).send({
                message: "Show all todos data",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    }
};
