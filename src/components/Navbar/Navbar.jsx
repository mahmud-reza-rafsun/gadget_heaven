import { NavLink, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  const { pathname } = useLocation();
  const navBg = pathname === "/" ? "bg-[#9538e2]" : "bg-[#ffff] shadow-sm";
  const navText = pathname === "/" ? "text-[#fff]" : "text-[#111]";
  const iconBg = pathname === "/" ? "bg-[#fff]" : "bg-[#f1f1f1]";
  return (
    <div className={`${navBg} fixed top-0 z-50 w-full`}>
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <a className={`font-bold text-xl ${navText}`}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu gap-5 menu-horizontal px-1 ${navText}`}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/statistics"}>Statistics</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
            <div className={`p-3 ${iconBg} rounded-full`}>
              <FiShoppingCart />
            </div>
            <div className={`p-3 ${iconBg} rounded-full`}>
              <FaRegHeart />
            </div>
          </div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute right-0 z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/statistics"}>Statistics</NavLink>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
