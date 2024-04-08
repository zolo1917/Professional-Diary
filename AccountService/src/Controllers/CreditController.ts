import express, { Request, Response } from "express";
const router = express.Router();

router.get("/credit", (req: Request, resp: Response) => {
  //TODO: credit
});

router.get("/credit/:id", (req: Request, resp: Response) => {});
router.post("/credit", (req: Request, resp: Response) => {});
router.put("/credit/:id", (req: Request, resp: Response) => {});
router.delete("/credit/:id", (req: Request, resp: Response) => {});

export { router as creditRouter };
