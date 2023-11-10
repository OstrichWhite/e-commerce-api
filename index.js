require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
