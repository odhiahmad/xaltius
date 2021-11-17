import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

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
  const [value, setValue] = React.useState(inValue || "");

  const [selected, setSelected] = React.useState(options[0]);
  console.log(selected);

  return (
    <>
      <div className="flex flex-col">
        {error && <span>{errorMsg}</span>}
        <Listbox
          value={selected}
          onChange={(e: any) => {
            setSelected(e);
            console.log(e);
            onChange(e, e.value);
          }}
        >
          {({ open }) => (
            <>
              <div className="mb-4 relative">
                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded shadow-sm pl-3 pr-10 py-2 px-4text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {selected.label}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {options.map((opt) => (
                      <Listbox.Option
                        key={opt.value}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={opt}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {opt.label}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </>
  );
}
