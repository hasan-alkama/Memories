import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoute from "./routes/post.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/post", postRoute);

const Connection_URL =
  "mongodb+srv://alkama_123:" +
  process.env.PASSWORD + "@cluster0.rgltw.mongodb.net/blogDB";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(Connection_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify',false);
