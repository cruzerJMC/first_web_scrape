const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(helmet());

require("./server/routes")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome"
  })
);

module.exports = app;
