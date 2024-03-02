import express, { Express, Request, Response } from "express"
import dotenv from 'dotenv'
import {json} from 'body-parser'
import { userRouter } from "./src/api/user";
import { authRouter } from "./src/api/auth";
import { roleRouter } from "./src/api/role";
import { loadConfig } from "./config";
const app: Express = express();
app.use(json)
app.use(userRouter)
app.use(authRouter)
app.use(roleRouter)
loadConfig()
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Application is running on Port : ${port}`)
})

