import express, { Request, Response } from "express";
import Accounts from "../Model/Account";

const router = express.Router();

router.get("/account", (req: Request, resp: Response) => {
  //TODO: update the sequalize function
  try {
    let data = Accounts.findAll();
    resp.status(200).json(JSON.stringify(data));
    resp.send();
  } catch (error) {
    resp.status(500).json({ message: "Internal server error." });
  }
});

router.get("/account/:id", (req: Request, resp: Response) => {
  //TODO: get the data for account
  try {
    const id = req.params.id;
    let data = Accounts.findByPk(id);
    resp.status(200).json(JSON.stringify(data));
    resp.send();
  } catch (error) {
    resp.status(500).json({ message: "Internal server error." });
  }
});

router.post("/account", (req: Request, resp: Response) => {
  // TODO: update the implementation
  let data = req.body;
  Accounts.create(data);
  resp.status(200).json({ message: "account creation successful" });
});

router.put("/account/:id", (req: Request, resp: Response) => {
  // TODO: update the implementation post sequalize
  let updatedObj = req.body;
  Accounts.update(updatedObj, {
    where: {
      id: req.params.id,
    },
  });
});

router.delete("/account/:id", (req: Request, resp: Response) => {
  // TODO: update the implementation post sequalize
  Accounts.destroy({
    where: {
      id: req.params.id,
    },
  });
});

export { router as accountRouter };
