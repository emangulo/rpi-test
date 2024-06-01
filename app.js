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
  console.log(req.params.somethign);
  res.send();
});

app.get("/query", (req, res) => {
  console.log(req.query.cool);
  res.send();
});

app.post("/posting", (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
