import express, { Express } from "express";
import * as dotenv from "dotenv";
import { connectMongo } from "./config/dbconfig";

const app: Express = express();

app.use(express.json());

dotenv.config();
connectMongo();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application is running on Port: ${port}`);
});
