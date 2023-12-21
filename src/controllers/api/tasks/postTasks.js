const Tasks = require("../../../models/tasks/tasks");

const postTask = async (req, res, next) => {
  const task = req.body;

  try {
    const added = await Tasks.create(task);
    res.send(added);
  } catch (error) {
    next(error);
  }
};

module.exports = postTask;
