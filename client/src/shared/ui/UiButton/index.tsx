import { ButtonHTMLAttributes } from "react";

export type UiButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export function UiButton({ className, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={`${className} transition-colors ease-out duration-300 additional-semibold rounded-full bg-first-color hover:bg-sixth-color px-[42px] py-[12px] text-sixth-color hover:text-first-color`}
    />
  );
}
