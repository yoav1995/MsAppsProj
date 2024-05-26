const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const baseURL =
  "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=";
const pageSize = 9;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/", async (req, res) => {
  const category = req.query.category;
  const page = req.query.page;
  const url = `${baseURL}${category}`;
  const response = await fetch(url);
  const payload = await response.json();
  const hits = payload.hits;
  const skipPages = pageSize * page;
  const returnHits = hits.slice(skipPages, skipPages + pageSize);

  res.status(200).json(returnHits);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
