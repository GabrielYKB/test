import Express from "express";
const app = Express();

import { sum, myNumber } from "./sum.js";

app.get("/", (req, res) => {
  const hej = sum(myNumber, 2);

  res.send(hej + "");
});

app.listen(3000);
