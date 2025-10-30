import React, { useState } from "react"; 
import logo from "../../assets/logo.webp";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation"; 
import { Link } from "react-router";

const Nav = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const textsToType = [
    "বই খুঁজুন...",
    1500,
    "লেখক খুঁজুন...",
    1500,
    "প্রকাশনী খুঁজুন...",
    1500,
  ];

  return (
    <div className="bg-white shadow-sm py-3">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/">
          <figure>
            <img src={logo} alt="" />
          </figure>
        </Link>
        <div className="flex items-center gap-5">
          <form className="relative flex items-center bg-white rounded-full px-1 border border-orange-500 w-96">
            {!isFocused && !inputValue && (
              <TypeAnimation
                sequence={textsToType}
                wrapper="span"
                speed={50}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none"
                repeat={Infinity}
              />
            )}

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 py-2 px-4 bg-transparent outline-none text-base"
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
            <button className="px-5 py-[5px] rounded-md bg-transparent border border-orange-500 cursor-pointer text-orange-500 hover:text-white hover:bg-orange-500 transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
