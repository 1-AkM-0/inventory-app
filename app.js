const express = require("express");
const path = require("node:path");
const app = express();
const categoryRouter = require("./routes/Category");
const gamesRouter = require("./routes/Games");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/category", categoryRouter);
app.use("/games", gamesRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Express app listening on port", PORT);
});
