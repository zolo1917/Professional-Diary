import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { secretKey } from "../../config";
const router = express.Router();

router.get("/login", async (req: Request, res: Response) => {
  //TODO: Update the login method
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await User.getUserByEmail(email);
    if (!user) {
      res.status(401).json({ message: "Invalid UserId" });
    }
    const isPasswordvalid = await bcrypt.compare(password, user.password);
    if (!isPasswordvalid) {
      res.status(401).json({ message: "invalid password" });
    }
    let key: string = secretKey();
    const accessToken = jwt.sign({ user: user.id }, key, { expiresIn: "15m" });
    const refreshToken = jwt.sign(
      {
        user: user.id,
      },
      key,
      { expiresIn: "7d" }
    );
  } catch {
    res.status(500).json({ message: "Internal Server error" });
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  //TODO: Create a new user
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const existingUser = User.getUserByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: "This User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as authRouter };
