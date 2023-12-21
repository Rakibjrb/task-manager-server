require("dotenv").config();
const cors = require("cors");
const createToken = require("./createToken");

const middlewares = (app, express) => {
  app.use(
    cors({
      origin: [process.env.PROD_ORIGIN],
      credentials: true,
    })
  );
  app.use(express.json());
  app.post("/api/create-token", createToken);
};

module.exports = middlewares;
