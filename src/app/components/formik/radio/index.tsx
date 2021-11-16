import * as React from "react";

export interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined;
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  isSelect?: boolean;
  type?: "text" | "password" | "number";
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
  onClick?: () => void;
}

export function Input({
  placeholder = "",
  type = "text",
  id = "",
  name = "",
  onChange = () => {},
  onBlur = () => {},
  isSelect = false,
  onClick = () => {},
  error = false,
  errorMsg = "",
  value = undefined,
}: PropTypes) {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const onBeforeClick = () => {
    if (!isSelect) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
    onClick();
  };
  const valueProps = value !== undefined ? { value } : {};
  return (
    <div className="flex flex-col mb-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          id={id}
          ref={inputRef}
          name={name}
          onChange={(e) => {
            e.persist();
            onChange(e, e.target.value);
          }}
          {...valueProps}
          onClick={onBeforeClick}
          onKeyUp={onBlur}
          name="vehicle"
          className="h-5 w-5 text-red-600"
        />
        <span className="ml-2 text-gray-700">Car</span>
      </label>

      {error && <span>{errorMsg}</span>}
    </div>
  );
}
