const Sequelize = require("sequelize");
const {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_USER
} = require("./environment");

const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD,
    {
        host: DATABASE_HOST,
        dialect: "mysql",
        define: {
            timestamps: false
        },
        logging: true
    }
);

module.exports = sequelize;
