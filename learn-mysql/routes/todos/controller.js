const { connection } = require("../../config");

module.exports = {
    getAll: (req, res) => {
        connection.query(`SELECT * from todos`, (error, results, fields) => {
            if (error) {
                res.status(500).send({
                    message: `there is something problem: ${error.sqlMessage}`
                });
            } else {
                res.status(200).send({
                    message: "Show all data todos",
                    data: results
                });
            }
        });
    }
};
