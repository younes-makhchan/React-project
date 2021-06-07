import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", postRoutes);

//Important:make sure  in the .env  file  to set PORT and moongose Connection
const PORT = process.env.PORT || 5000;

// making sure that mongoose  runnig and  to avoid errors
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log("Server runnig on Port" + PORT))
  )
  .catch((error) => {
    console.log(error.message);
  });
mongoose.set("useFindAndModify", false);
