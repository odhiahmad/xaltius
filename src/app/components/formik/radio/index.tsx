import * as React from "react";

export interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined;
  error?: boolean;
  errorMsg?: string;
  options?: {
    label: string | number;
    value: string;
  }[];
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
  onClick?: () => void;
}

export function Input({
  id = "",
  name = "",
  onChange = () => {},
  onBlur = () => {},
  value: inValue = undefined,
  options = [],
  onClick = () => {},
  error = false,
  errorMsg = "",
  value = undefined,
}: PropTypes) {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const onBeforeClick = () => {
    onClick();
  };

  const valueProps = value !== undefined ? { value } : {};
  return (
    <div className="flex flex-col mb-4">
      {error && <span>{errorMsg}</span>}

      {options.map((pilihan) => (
        <div>
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
              onClick={onBeforeClick}
              onKeyUp={onBlur}
              value={pilihan.value}
              className="h-5 w-5 text-red-600"
              {...valueProps}
            />
            <span className="ml-2 text-gray-700">{pilihan.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
