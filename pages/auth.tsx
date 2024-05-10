import Button from "@/components/Button";
import Input from "@/components/Input";
import { useCallback, useState } from "react";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [variant, setVariant] = useState<string>("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/login-screen-image.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "register" ? "Registre-se" : "Entrar"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="username"
                  label="Usuário"
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              )}
              <Input
                id="email"
                label="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                label="Senha"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <Button buttonColorRed>
                {variant === "register" ? "Registrar" : "Login"}
              </Button>
              <p className="text-neutral-400 mt-12">
                {variant === "register" ? "Já tem conta?" : "Novo por aqui?"}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {variant === "register" ? "Faça login" : "Crie uma conta"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
