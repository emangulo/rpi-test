require("dotenv").config;
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT | 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("It works!");
});

app.get("/oh/:somethign", (req, res) => {
  res.send(req.params.somethign);
});

app.get("/query", (req, res) => {
  res.send(req.query.cool);
});

app.post("/posting", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
