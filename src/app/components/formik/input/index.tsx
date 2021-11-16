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
        <input
          id={id}
          ref={inputRef}
          name={name}
          onChange={(e) => {
            e.persist();
            onChange(e, e.target.value);
          }}
          type={type}
          onClick={onBeforeClick}
          onKeyUp={onBlur}
          placeholder={placeholder}
          autoComplete="off"
          className="rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          {...valueProps}
        />

        {error && <span>{errorMsg}</span>}
      </div>
    
  );
}
