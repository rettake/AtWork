import {
  InputHTMLAttributes,
  PropsWithRef,
  useId,
  useRef,
  useState,
  useEffect,
} from "react";

export type UiTextFieldProps = {
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({ label, error, inputProps }: UiTextFieldProps) {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-2.5">
      {label && (
        <label className="block main-semibold text-first-color" htmlFor={id}>
          {label}
        </label>
      )}
      {isFocused && (
        <div className="z-100 absolute top-[42px] md:top-[45px] left-[90%] md:left-[96%] lg:left-[91%] cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0659 8.99469C16.3588 8.70179 16.3588 8.22692 16.0659 7.93403C15.773 7.64113 15.2981 7.64113 15.0052 7.93403L12 10.9392L8.99482 7.93403C8.70192 7.64113 8.22705 7.64113 7.93416 7.93403C7.64126 8.22692 7.64126 8.70179 7.93416 8.99469L10.9394 11.9999L7.93415 15.0051C7.64125 15.298 7.64125 15.7729 7.93415 16.0658C8.22704 16.3586 8.70191 16.3586 8.99481 16.0658L12 13.0605L15.0052 16.0658C15.2981 16.3586 15.773 16.3586 16.0659 16.0658C16.3588 15.7729 16.3588 15.298 16.0659 15.0051L13.0607 11.9999L16.0659 8.99469Z"
              fill="#595959"
            />
          </svg>
        </div>
      )}
      <input
        {...inputProps}
        ref={inputRef}
        id={id}
        className="additional-medium px-2 rounded-full pl-4 pr-2 py-2.5 border-2 border-fourth-color"
      />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
