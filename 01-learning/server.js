import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: yash@gmail.com");
});

app.post("/", function (req, res) {
  // console.log(req.body.number1);
  const numOne = Number(req.body.number1);
  const numTwo = Number(req.body.number2);

  const result = numOne + numTwo;
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000...");
});
