const Tasks = require("../../../models/tasks/tasks");

const deleteTasks = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deleted = await Tasks.deleteOne({ _id: id });
    res.send(deleted);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTasks;
