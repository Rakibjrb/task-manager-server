const Tasks = require("../../../models/tasks/tasks");

const getSingleTask = async (req, res, next) => {
  const taskId = req.params.id;
  try {
    const task = await Tasks.findOne({ _id: taskId });
    res.send(task);
  } catch (error) {
    next(error);
  }
};

module.exports = getSingleTask;
