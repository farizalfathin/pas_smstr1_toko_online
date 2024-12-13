import { useAuth } from "@/context/Authentication";
import { Link } from "react-router-dom";
import AuthUserRender from "@/utils/AuthUserRender";
import SwithTheme from "./daisyui/SwitchTheme";

export default function Header() {
  const { onLogout } = useAuth();

  return (
    <header className="inline">
      <div className="sticky top-0 z-50">
        <nav className="bg-white dark:bg-gray-900 navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative dark:shadow-none">
          <div className="px-6 md:px-12 w-full">
            <div className="w-full flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between lg:w-auto">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center">
                  <span className="text-base font-bold text-gray-600 dark:text-white">
                    MinMarket
                  </span>
                </a>
                <label
                  htmlFor="hbr"
                  className="block lg:hidden cursor-pointer text-gray-600 dark:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path
                      d="M3 12h18M3 6h18M3 18h18"
                      className="dark:stroke-white"
                    />
                  </svg>
                </label>
              </div>

              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0 peer-checked:block">
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <Link
                        to="/"
                        className={`${
                          location.pathname === "/" ? "text-yellow-600" : ""
                        } block md:px-4 transition hover:text-yellow-600 dark:hover:text-primaryLight`}>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className={`${
                          location.pathname === "/about"
                            ? "text-yellow-600"
                            : ""
                        } block md:px-4 transition hover:text-yellow-600 dark:hover:text-primaryLight`}>
                        <span>About</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className={`${
                          location.pathname === "/products"
                            ? "text-yellow-600"
                            : ""
                        } block md:px-4 transition hover:text-yellow-600 dark:hover:text-primaryLight`}>
                        <span>Product</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className={`${
                          location.pathname === "/contact"
                            ? "text-yellow-600"
                            : ""
                        } block md:px-4 transition hover:text-yellow-600 dark:hover:text-primaryLight`}>
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l items-center gap-3">
                  <AuthUserRender
                    AuthenticatedRender={
                      <>
                        <button
                          onClick={onLogout}
                          className="relative flex h-9 w-40 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-red-600 dark:before:bg-red-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                          <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                            Logout
                          </span>
                        </button>
                      </>
                    }
                    UnauthenticatedRender={
                      <>
                        <Link
                          to="/login"
                          className="relative flex h-9 w-32 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-yellow-400 dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                          <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                            Login
                          </span>
                        </Link>
                      </>
                    }
                  />
                  <SwithTheme />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
