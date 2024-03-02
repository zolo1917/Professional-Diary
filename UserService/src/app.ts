import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { loadConfig } from "./config/config";
import { connectMongo } from "./config/dbconfig";
import { roleRouter } from "./api/role";
import { authRouter } from "./api/auth";
import { userRouter } from "./api/user";
import { json } from "body-parser";

const app: Express = express();
// app.use(userRouter);
app.use(express.json());
app.use(authRouter);
app.use(roleRouter);
loadConfig();
connectMongo();
const port = process.env.PORT || 3000;
app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "The server is up" });
});
app.listen(port, () => {
  console.log(`Application is running on Port : ${port}`);
});
