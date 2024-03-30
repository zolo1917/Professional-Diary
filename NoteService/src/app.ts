import express, { Express } from "express";
import * as dotenv from "dotenv";
import { connectMongo } from "./config/dbconfig";
import { notesRouter } from "./api/notes";
import cors from "cors";
const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(notesRouter);
dotenv.config();
connectMongo();
const port = process.env.PORT || 3000; // 4301
app.listen(port, () => {
  console.log(`Application is running on Port: ${port}`);
});
