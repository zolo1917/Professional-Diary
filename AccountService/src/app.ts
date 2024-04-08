import express, { Express } from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { accountRouter } from "./Controllers/AccountController";
import { creditRouter } from "./Controllers/CreditController";
import { debitRouter } from "./Controllers/DebitController";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 4302;
const app: Express = express();
app.use(cors());
app.use(accountRouter);
app.use(creditRouter);
app.use(debitRouter);
app.listen(port, () => {
  console.log("The account service is running");
});
