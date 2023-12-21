const { model, Schema } = require("mongoose");

const tasks = new Schema({
  email: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  priority: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
});

const Tasks = model("Tasks", tasks, "tasks");
module.exports = Tasks;
