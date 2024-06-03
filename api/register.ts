import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { toast } from "react-toastify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      toast.error("Email já registrado");
      return res.status(422).json({ error: "Email já registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).end();
  }
}
