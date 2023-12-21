const Tasks = require("../../../models/tasks/tasks");

const tasks = async (req, res, next) => {
  const client = req.decoded.email;
  try {
    const tasks = await Tasks.find({ email: client });
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = tasks;
