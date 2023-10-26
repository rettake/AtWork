import { ButtonHTMLAttributes } from "react";

export function UiButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="transition-colors ease-out duration-300 additional-semibold rounded-full bg-first-color hover:bg-sixth-color px-[42px] py-[12px] text-sixth-color hover:text-first-color"
    />
  );
}
