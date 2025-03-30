import express from "express";
import { Request, Response } from "express";
import { prisma } from "@repo/db";

const app = express();
app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newUser = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({
    msg: "signup complete",
    newUser,
  });
  return;
});

app.listen(3001);

// abhedya
