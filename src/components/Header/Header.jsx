import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router";

const Header = ({ darkMode, setDarkMode }) => {
  const navLinks = (
    <>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base">
        <a href="#about">About me</a>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base ">
        <a href="#contact">Contact me</a>
      </li>
    </>
  );
  return (
    <div className="bg-gray-600">
      <div className="lg:w-[1024px] xl:w-[1280px] mx-auto">
        <div className="navbar text-white">
          <div className="navbar-start  ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
              >
                {navLinks}
              </ul>
            </div>
            <a className="cursor-pointer text-xl">MamunArRoshid</a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {/* Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-16 flex items-center rounded-full p-1 bg-gray-50 dark:bg-green-600 transition-colors duration-500 cursor-pointer"
            >
              <span
                className={`w-6 h-6  rounded-full shadow-md transform transition-transform duration-500 flex flex-col items-center justify-center ${
                  darkMode
                    ? "translate-x-8 bg-blue-950"
                    : "translate-x-0 bg-yellow-400 "
                }`}
              >
                {darkMode ? <MdDarkMode /> : <IoSunny />}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
