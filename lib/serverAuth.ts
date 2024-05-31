import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";
import { toast } from "sonner";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Usuário não existe");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Usuário não encontrado");
  }

  return { currentUser };
};

export default serverAuth;
