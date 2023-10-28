import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiTextFieldProps = {
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({ label, error, inputProps }: UiTextFieldProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <label className="block main-semibold text-first-color" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className="additional-medium px-2 rounded-full pl-4 pr-2 py-2.5 border-2 border-fourth-color"
      />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
