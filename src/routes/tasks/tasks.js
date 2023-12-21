const router = require("express").Router();
const postTask = require("../../controllers/api/tasks/tasks");
const validateUser = require("../../middlewares/validateUser/validateUser");

router.post("/api/tasks", validateUser, postTask);

module.exports = router;
