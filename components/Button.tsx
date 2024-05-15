import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColorRed: boolean;
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={
        props.buttonColorRed
          ? "bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
          : "bg-white py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
      }
    >
      {props.children}
    </button>
  );
}
