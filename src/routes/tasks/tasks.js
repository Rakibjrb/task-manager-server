const router = require("express").Router();
const changeStatus = require("../../controllers/api/tasks/changeStatus");
const deleteTasks = require("../../controllers/api/tasks/deleteTasks");
const editTask = require("../../controllers/api/tasks/editTask");
const getSingleTask = require("../../controllers/api/tasks/getSingleTask");
const postTask = require("../../controllers/api/tasks/postTasks");
const tasks = require("../../controllers/api/tasks/tasks");
const validateUser = require("../../middlewares/validateUser/validateUser");

router.post("/api/tasks", validateUser, postTask);
router.get("/api/tasks", validateUser, tasks);
router.get("/api/task/:id", getSingleTask);
router.delete("/api/tasks/:id", validateUser, deleteTasks);
router.put("/api/status/change/:id", validateUser, changeStatus);
router.put("/api/task/edit/:id", validateUser, editTask);

module.exports = router;
