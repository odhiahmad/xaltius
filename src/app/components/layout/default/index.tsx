import { Fragment, useEffect } from "react";
import Navbar from "../navbar/lazyload";

type DefaultLayoutType = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: DefaultLayoutType) => {
  let theme = localStorage.getItem("theme");

  useEffect(() => {
    let html = document.querySelector("html") as any;
    html.setAttribute("class", theme);
  }, [theme]);

  return (
    <Fragment>
      <div className="min-h-full">
        <Navbar />
        {children}
      </div>
    </Fragment>
  );
};
