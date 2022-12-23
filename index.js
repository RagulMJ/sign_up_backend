const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const users = require("./routes/user.js");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("err.message");
  });

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("webserver start running");
});

app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Listening on the port ${port}...`);
});
