import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  let navigation = [];
  switch (user?.role) {
    case "CUSTOMER":
      navigation = [
        { name: "Properties", to: "/properties", current: false },
        { name: "Favorites", to: "/customer/favorites", current: false },
        { name: "Offers", to: "/customer/offers", current: false },
      ];
      break;
    case "OWNER":
      navigation = [
        { name: "Properties", to: "/properties", current: false },
        { name: "My Properties", to: "/owner/properties", current: false },
        { name: "Offers", to: "/owner/offers", current: false },
      ];
      break;
    case "ADMIN":
      navigation = [
        { name: "Properties", to: "/properties", current: false },
        { name: "Owners", to: "/admin/owners", current: false },
        { name: "Customers", to: "/admin/customers", current: false },
      ];
      break;

    default:
      navigation = [{ name: "Properties", to: "/properties", current: false }];
      break;
  }

  const logout = () => {
    setUser(null);
    localStorage.clear();
    nav("/");
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-gradient-to-r from-purple-800 to-indigo-800"
      >
        {() => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                    alt="Your Company"
                  />
                  <Link
                    to="/"
                    className="ml-3 text-white text-lg font-semibold"
                  >
                    DreamHomes
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          "text-white hover:text-indigo-200 px-3 py-2 text-sm font-medium rounded-md",
                          {
                            "bg-indigo-900": item.current,
                            "hover:bg-indigo-700": !item.current,
                          }
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-4 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!user && (
                    <>
                      <Link
                        to="login"
                        type="button"
                        className="rounded-md px-3 py-2 bg-indigo-900 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none"
                      >
                        Login
                      </Link>
                      <Link
                        to="signup"
                        type="button"
                        className="ml-3 rounded-md px-3 py-2 bg-indigo-900 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none"
                      >
                        Signup
                      </Link>
                    </>
                  )}
                  {user && (
                    <div className="flex items-center">
                      <span className="text-white mr-3 text-sm">
                        Hello, {user.firstName}
                      </span>
                      {user?.role === "OWNER" && (
                        <Link
                          to="/owner/properties/add"
                          className="mr-3 self-end rounded-md px-3 py-2 bg-sky-700 text-white text-sm font-medium hover:bg-sky-600 focus:outline-none"
                        >
                          Add Property +
                        </Link>
                      )}
                      <button
                        onClick={logout}
                        to="login"
                        type="button"
                        className="rounded-md px-3 py-2 bg-indigo-900 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Header;
