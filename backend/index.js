const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");
const path = require("path");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

const _dirname = path.resolve();

app.use("/api", router);

app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to DB");
    console.log("server is running");
  });
});
