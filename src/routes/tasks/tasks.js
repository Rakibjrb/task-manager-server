const router = require("express").Router();
const postTask = require("../../controllers/api/tasks/postTasks");
const tasks = require("../../controllers/api/tasks/tasks");
const validateUser = require("../../middlewares/validateUser/validateUser");

router.post("/api/tasks", validateUser, postTask);
router.get("/api/tasks", validateUser, tasks);

module.exports = router;
