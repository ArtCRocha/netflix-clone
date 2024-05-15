import { Field, FieldProps } from "formik";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
}

export default function Input(props: InputProps) {
  return (
    <Field name={props.name}>
      {({ field, form, meta }: FieldProps) => (
        <div className="relative">
          <input
            id={props.id}
            value={field.value}
            type={props.type}
            onChange={form.handleChange}
            className="blockc rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer mt-4"
            placeholder={props.placeholder || ""}
          />
          <label
            className="absolute text-md text-zinc-400 duration-150 tranform -translate-y-3 scale-75 top-7 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            htmlFor={props.id}
          >
            {props.label}
          </label>
          {meta.error && (
            <p className="text-md text-red-600 scale-75">{meta.error}</p>
          )}
        </div>
      )}
    </Field>
  );
}
