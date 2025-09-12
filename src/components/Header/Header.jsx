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
      <li className="hover:bg-gray-100 hover:text-gray-800 rounded font-semibold duration-500 text-base ">
        <Link to={"/about"}>Contact me</Link>
      </li>
    </>
  );
  return (
    <div className="bg-gray-600">
      <div className="lg:w-[1024px] xl:w-[1280px] mx-auto">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
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
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1C9Ieyrg12bkuEu6y5b49TmarY0w1ct9a&export=download"
              target="blank"
              className="text-base font-semibold cursor-pointer px-3 py-1 bg-[#21a366] text-white rounded-3xl font-inter hover:bg-transparent border-2 border-[#21a366] hover:text-[#21a366] duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
