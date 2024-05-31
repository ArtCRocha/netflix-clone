import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "sonner";

export default function useAuth() {
  const router = useRouter();

  async function login(values) {
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (result?.error) {
      toast.error("Erro ao efetuar login usuário");
      return;
    }

    router.push("/");
  }

  async function loginWithGithub() {
    await signIn("github", { callbackUrl: "/" });
  }

  async function loginWithGoogle() {
    await signIn("google", { callbackUrl: "/" });
  }

  async function register(values) {
    try {
      await axios.post("/api/register", values);
      login({ email: values.email, password: values.password });
    } catch (error) {
      toast.error("Erro ao cadastrar usuário");
    }
  }

  return { register, login, loginWithGithub, loginWithGoogle };
}
