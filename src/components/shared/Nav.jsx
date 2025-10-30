import React from "react";
import logo from "../../assets/logo.webp";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="bg-white shadow-sm py-3">
      <div className="flex justify-between container mx-auto">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="flex items-center gap-5">
          <form className="flex items-center bg-white rounded-full px-1 border border-orange-500  full">
            <input
              type="text"
              placeholder="Search anything..."
              className="flex-1 py-2 px-2 bg-transparent outline-none "
            />
            <button
              type="submit"
              className="bg-orange-500 p-2 rounded-full text-white flex items-center justify-center"
            >
              <IoSearchSharp size={20} />
            </button>
          </form>

          <div className="hover:bg-orange-500 hover:text-white p-3 cursor-pointer rounded-full transition duration-300">
            <BsCart2 size={20} />
          </div>

          <div className="">
            <button className="px-5 py-[5px] rounded-md bg-transparent outline-1 cursor-pointer outline-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
