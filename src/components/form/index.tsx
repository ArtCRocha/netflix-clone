import { PropsWithChildren } from "react";
import { Formik, FormikConfig, FormikValues } from "formik";
import Input from "./Input";
import Button from "../Button";

export default function Form<T>(
  props: PropsWithChildren<
    FormikConfig<T extends FormikValues ? T : FormikValues>
  >
) {
  return (
    <Formik {...props}>
      {(formProps) => (
        <form
          className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full"
          onSubmit={formProps.handleSubmit}
          onReset={formProps.handleReset}
        >
          {props.children}
        </form>
      )}
    </Formik>
  );
}

Form.Input = Input;
Form.Submit = Button;
