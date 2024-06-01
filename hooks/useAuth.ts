import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "sonner";

export default function useAuth() {
  const router = useRouter();

  async function login(values: any) {
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: "/profiles",
    });

    if (result?.error) {
      console.log("Erro");
      toast.error("Erro ao efetuar login usuário");
      return;
    }

    router.push("/profiles");
  }

  async function register(values: any) {
    try {
      await axios.post("/api/register", values);
      login({ email: values.email, password: values.password });
    } catch (error) {
      toast.error("Erro ao cadastrar usuário");
    }
  }

  async function loginWithGithub() {
    await signIn("github", { callbackUrl: "/profiles" });
  }

  async function loginWithGoogle() {
    await signIn("google", { callbackUrl: "/profiles" });
  }

  return { register, login, loginWithGithub, loginWithGoogle };
}
