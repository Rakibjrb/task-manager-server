const express = require("express");
const app = express();
const middlewares = require("./middlewares/corsSetup");
const noRoutes = require("./controllers/noRoutes/noRoutes");
const handleInternalServerErrors = require("./controllers/handleServerError/handleServerError");
const features = require("./routes/features/features");
const benefits = require("./routes/benefits/benefits");
const tasks = require("./routes/tasks/tasks");

//server check
app.get("/", (req, res) => {
  res.send({
    message: "Server is working fine",
    status: 200,
  });
});

//installed middlwares
middlewares(app, express);

//api routes
app.use(features);
app.use(benefits);
app.use(tasks);

//internal server errors handle
app.all("*", noRoutes);
app.use(handleInternalServerErrors);

module.exports = app;
