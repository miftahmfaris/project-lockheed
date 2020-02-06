require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const todos = require("./todos");

const PORT = process.env.PORT;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send({ message: "Welcome to my API", data: todos });
});

app.get("/test", (req, res) => {
    res.download("/test2.pdf");
    res.send({
        message: "This is hello route"
    });
});

app.get("/hello/:id", (req, res) => {
    const { id } = req.params;

    res.send({
        message: `This is hello route with params ${id}`
    });
});

app.post("/", (req, res) => {
    const { id, todo } = req.body;

    todos.push({ id: parseInt(id), todo });

    res.status(201).send({ message: "Your data is added", data: todos });
});

app.listen(PORT, () => {
    console.log(`My API is listen on PORT: ${PORT}`);
});
