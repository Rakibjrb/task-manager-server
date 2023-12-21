const router = require("express").Router();
const deleteTasks = require("../../controllers/api/tasks/deleteTasks");
const postTask = require("../../controllers/api/tasks/postTasks");
const tasks = require("../../controllers/api/tasks/tasks");
const validateUser = require("../../middlewares/validateUser/validateUser");

router.post("/api/tasks", validateUser, postTask);
router.get("/api/tasks", validateUser, tasks);
router.delete("/api/tasks/:id", validateUser, deleteTasks);

module.exports = router;
