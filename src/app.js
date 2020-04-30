require("dotenv");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cuid = require("cuid");
const data = require("./server-data");

const { NODE_ENV } = require("./config");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(cors());
app.use(helmet());
app.use(morgan(morganOption));
app.use(express.json());

app.get("/address", (req, res) => {
  res.json({ data });
});

app.post("/address", (req, res) => {
  let id = cuid();
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
  } = req.body;

  if (!firstName || !lastName || !address1 || !city || !state || !zip) {
    res.status(400).json({ error: "All fields required" });
  }

  if (state.length !== 2) {
    res
      .status(400)
      .json({ error: "Please use 2-letter abbreviation for state" });
  }

  if (zip.length !== 5) {
    res.status(400).json({ error: "Please use 5 digit zipcode" });
  }

  res.send(
    `Congrats! ${firstName} ${lastName} has been entered into the system!`
  );
});

app.use(function errorMiddleWare(err, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "Server error" } };
  } else {
    console.log(err);
    response = { error: err, message: err.message };
  }
  res.status(500).json({ error: err.message });
  next();
});

module.exports = app;
