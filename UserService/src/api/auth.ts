import express,{Request, Response} from 'express'

const router = express.Router()

router.get("/login", (req: Request, res: Response) =>{
    //TODO: Update the login method
})

router.post("/signup", (req: Request, res: Response)=>{
    //TODO: Create a new user
})

export { router as authRouter}