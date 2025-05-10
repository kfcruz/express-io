require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/posts");

// init. express app
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/posts", postsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
