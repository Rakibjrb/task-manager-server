const router = require("express").Router();
const postTask = require("../../controllers/api/tasks/tasks");

router.post("/api/tasks", postTask);

module.exports = router;
