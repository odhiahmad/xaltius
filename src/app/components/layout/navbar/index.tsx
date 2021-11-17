import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

interface ThemeType {
  setLightMode: () => {};
  setDarkMode: () => {};
  showSidebar: () => {};
  hiddenSidebar: () => {};
  statusSidebar: String;
}

export function Navbar({
  setLightMode,
  setDarkMode,
  showSidebar,
  hiddenSidebar,
  statusSidebar,
}: ThemeType) {
  const [enabled, setEnabled] = useState(false);
  let theme = localStorage.getItem("theme");
  useEffect(() => {
    if (theme === "light") {
      setEnabled(false);
      setLightMode();
    } else {
      setEnabled(true);
      setDarkMode();
    }
  }, [theme]);

  const switchChange = () => {
    if (theme === "dark") {
      setEnabled(false);
      setLightMode();
    } else {
      setEnabled(true);
      setDarkMode();
    }
  };

  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Login", key: "login", current: true },
    { name: "Registration", key: "registration", current: false },
    { name: "Berita", key: "berita", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  const aktifClass = "bg-gray-900 text-white";
  const nonAktifClass =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item, index) =>
                      index === 0 ? (
                        <NavLink
                          exact
                          activeClassName={aktifClass}
                          className={nonAktifClass}
                          to={item.key}
                        >
                          {item.name}
                        </NavLink>
                      ) : (
                        <NavLink
                          activeClassName={aktifClass}
                          className={nonAktifClass}
                          to={item.key}
                        >
                          {item.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    onClick={() => {}}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
