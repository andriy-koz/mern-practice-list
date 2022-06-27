import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";

import listRoutes from "./routes/list.js";

const app = express();
config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());

app.use("/list", listRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_CNN)
  .then(() => app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`)))
  .catch(error => console.log(error.message));