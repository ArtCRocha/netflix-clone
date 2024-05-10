import { ReactNode } from "react";

interface ButtonProps {
  buttonColorRed: boolean;
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
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
