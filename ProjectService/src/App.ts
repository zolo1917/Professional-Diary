import Express,{ Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app  = Express();
const port = process.env.PORT;
app.get('/', (req: Request, resp: Response)=> {
    resp.send("the request is received")
})

app.listen(port, ()=>{
    console.log(`applicaiton is up and listening on port : ${port}`)
})