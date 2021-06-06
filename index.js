const express = require("express");
const cors = require("cors");
const path = require("path");

//configuration
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "home.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
