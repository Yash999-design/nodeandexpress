// const express = require("express");
import express from "express";
import getDate from "./date.js";

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("list", { kindOfDay: getDate(), newListItem: items });
});

app.post("/", (req, res) => {
  items.push(req.body.newItem);

  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
