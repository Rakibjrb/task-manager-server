const Tasks = require("../../../models/tasks/tasks");

const editTask = async (req, res, next) => {
  const taskId = req.params.id;
  const editedData = req.body;
  try {
    const edited = await Tasks.updateOne({ _id: taskId }, editedData);
    res.send(edited);
  } catch (error) {
    next(error);
  }
};

module.exports = editTask;
