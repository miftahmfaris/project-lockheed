const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addData);
router.delete("/:id", require("./controller").deleteData);
router.put("/:id", require("./controller").updateData);


module.exports = router;
