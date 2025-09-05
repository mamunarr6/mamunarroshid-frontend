import { Link } from "react-router";

const Header = () => {
  const navLinks = (
    <>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base">
        <Link to={"/projects"}>Projects</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base">
        <Link to={"/about"}>About me</Link>
      </li>
    </>
  );
  return (
    <div className="bg-gray-600  ">
      <div className="lg:w-[1024px] xl:w-[1280px] mx-auto  ">
        <div className="navbar text-white ">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <a className="cursor-pointer text-xl">MamunArRoshid</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="bg-transparent font-semibold p-2 rounded duration-500 outline-none border-none shadow-none text-white hover:bg-gray-100 hover:text-gray-800 cursor-pointer">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
