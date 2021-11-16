import * as React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { INode } from "types/common";

export interface PropTypes {
  id: string;
  children?: INode;
  type?: "button" | "submit";
  onClick?: () => any;
  loading?: boolean;
}

export function Button({
  children = "",
  onClick = () => {},
  type = "button",
  id = "",
  loading = false,
}: PropTypes) {
  return (
    <>
      <button
        id={id}
        type={type}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClick}
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {/* <LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          /> */}
        </span>
        {loading ? (
          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900" />
        ) : (
          // prettier-ignore
          children
        )}
      </button>
    </>
  );
}
