import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "../../assets/Images/assets";
import { ShopContext } from "../../Context/Context";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center  justify-between py-5 font-medium">
      <Link to="/">
        <h1 className=" text-3xl max-sm:text-xl font-bold w-36">MSR_FASHION</h1>
      </Link>

      <ul className="hidden max-md:hidden  sm:flex gap-7  text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collections" className="flex flex-col items-center gap-1">
          <p>All Collections</p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About </p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact </p>
          <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className="w-7 cursor-pointer"
        />

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" />
          <p className="absolute right-[-1px] bottom-[-1px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>

        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer "
            />
          </Link>

          <div className="group-hover:block hidden absolute dropdown-menu z-[99]  right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-10 bg-slate-100 text-gray-400">
              <p className="text-sm cursor-pointer hover:text-black">Profile</p>
              <p className="text-sm cursor-pointer hover:text-black">
                Settings
              </p>
              <p className="text-sm cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden  "
        />
      </div>

      {/* SideBar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden z-[99]  bg-gray-300 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-black">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <div className="flex flex-col gap-4">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collections"
            >
              All Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
