const express = require("express");
const cors = require("cors");

//configuration
const app = express();
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "home.html"));
});
