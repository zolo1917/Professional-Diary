import express,{Request, Response} from 'express'
const router = express.Router()

router.get("/user",(req: Request, res:Response)=>{})
router.post("/user",(req: Request, res:Response)=>{})
router.put("/user",(req: Request, res:Response)=>{})
router.delete("/user",(req: Request, res:Response)=>{})

export {router as userRouter}