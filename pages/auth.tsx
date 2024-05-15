import Button from "@/components/Button";
import { useCallback, useMemo, useState } from "react";
import Form from "@/components/form";
import useRegister from "@/hooks/useAuth";

interface InitialValues {
  name?: string;
  email: string;
  password: string;
}

export default function Auth() {
  const [variant, setVariant] = useState<string>("login");

  const { register, login } = useRegister();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const initialValuesMemo = useMemo(() => {
    const initialValues: InitialValues = { name: "", email: "", password: "" };

    if (variant === "login") {
      delete initialValues.name;
      return initialValues;
    }

    return initialValues;
  }, [variant]);

  return (
    <div className="relative h-full w-full bg-[url('/images/login-screen-image.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <Form
            initialValues={initialValuesMemo}
            onSubmit={variant === "register" ? register : login}
          >
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "register" ? "Registre-se" : "Entrar"}
            </h2>
            {variant === "register" && (
              <Form.Input id="name" label="Usuário" name="name" />
            )}
            <Form.Input id="email" label="Email" name="email" />
            <Form.Input id="password" label="Senha" name="Senha" />
            <Button buttonColorRed type="submit">
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
          </Form>
        </div>
      </div>
    </div>
  );
}
