const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to mongo database");
    })
    .catch(error => {
        console.log("There is something wrong", error);
    });

const db = mongoose.connection;

module.exports = db;
