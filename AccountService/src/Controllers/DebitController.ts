import express, { Request, Response } from "express";
const router = express.Router();

router.get("/debit", (req: Request, resp: Response) => {
  //TODO: debit
});

router.get("/debit/:id", (req: Request, resp: Response) => {});
router.post("/debit", (req: Request, resp: Response) => {});
router.put("/debit/:id", (req: Request, resp: Response) => {});
router.delete("/debit/:id", (req: Request, resp: Response) => {});

export { router as debitRouter };
