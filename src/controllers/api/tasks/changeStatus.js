const Tasks = require("../../../models/tasks/tasks");

const changeStatus = async (req, res, next) => {
  const taskId = req.params.id;
  const { status } = req.body;
  try {
    const changed = await Tasks.updateOne({ _id: taskId }, { status });
    res.send(changed);
  } catch (error) {
    next(error);
  }
};

module.exports = changeStatus;
