import express from "express";
import bodyParser from "body-parser";

/* bodyParser note
since the express has .json and .urlencoded method so don't need to do bodyParser.json() or bodyParser.urlencoded({extended:true}). Hence you can simply remove the bodyParser import. 
*/

import { dirname } from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function (req, res) {
  const name = req.body.studentName;
  const classOfStudent = req.body.studentClass;
  const subject = req.body.studentSubject;
  const rollno = req.body.studentRollno;

  res.send(
    `Hello ${name}, I hope you are doing well, as I can see you are in ${classOfStudent} class, and your roll no is ${rollno} and subject is ${subject}. So I wish you all the best for your exam.`
  );
});

app.listen(3001, function () {
  console.log("Listening on Port 3001");
});
