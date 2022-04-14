const express = require("express");

const app = express();

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gmail.com",
    status: "active",
  },
];

app.use(express.static("public"));

/* once you connect static files: you don't need to redirect root with index.html, it will automatically fetch Index.html for root.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

*/

app.get("/api/members", (req, res) => {
  res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
