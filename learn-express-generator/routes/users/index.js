const express = require("express");
const router = express.Router();

router.get("/id/:id", require("./controller").getById);

module.exports = router;
