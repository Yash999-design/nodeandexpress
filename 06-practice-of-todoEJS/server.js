import express from "express";
import getDate from "./date.js";

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("todoItem", { date: getDate(), item: items });
});

app.post("/", (req, res) => {
  let accessedData = req.body.textField;
  items.push(accessedData);
  res.redirect("/");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
