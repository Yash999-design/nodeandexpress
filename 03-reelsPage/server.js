import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
});

app.listen(3000, function () {
  console.log("I Love You!");
});
