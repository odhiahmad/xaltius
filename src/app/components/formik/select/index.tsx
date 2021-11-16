import * as React from "react";

export interface PropTypes {
  id: string;
  name: string;
  value?: string | number | undefined | null;
  placeholder?: string;
  error?: boolean;
  options?: {
    label: string | number;
    value: string;
  }[];
  label?: string;
  title?: string | undefined;
  errorMsg?: string;
  isSelect?: boolean;
  type?: "text" | "password" | "number";
  onChange?: (event?: any, value?: string | number) => any;
  onBlur?: (event?: any) => any;
  onClick?: () => void;
}

export function Select({
  placeholder = "",
  value: inValue = undefined,
  type = "text",
  id = "",
  options = [],
  name = "",
  onChange = () => {},
  onBlur = () => {},
  isSelect = false,
  onClick = () => {},
  error = false,
  errorMsg = "",
}: PropTypes) {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [value, setValue] = React.useState(inValue || "");
  const onBeforeChange = (event: any) => {
    setValue(event.target.value);
    onChange(event, event.target.value);
  };
  const onBeforeClick = () => {
    onClick();
  };
  const valueProps =
    value !== undefined
      ? {
          value:
            value === ""
              ? ""
              : options.length > 0
              ? options[options.findIndex((opt) => opt.value === value)].label
              : "",
        }
      : {};
  return (
    <>
      <div className="flex flex-col mb-4">
        <select
          id={id}
          name={name}
          onChange={(e) => {
            e.persist();
            onChange(e, e.target.value);
          }}
          {...valueProps}
          onClick={onBeforeClick}
          onKeyUp={onBlur}
          className="flex-1 w-full mt-4 text-gray-700 py-2 px-4 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          {options.map((pilihan) => (
            <option value={pilihan.value}>{pilihan.label}</option>
          ))}
        </select>

        {error && <span>{errorMsg}</span>}
      </div>
    </>
  );
}
