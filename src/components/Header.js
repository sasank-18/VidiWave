import React from "react";
import logo from "./Constants/icons/logo.png";
import userIcon from "./Constants/icons/user (1).png";
import searchIcon from "./Constants/icons/magnifying-glass-solid.svg";
import MenuIcon from "./Constants/icons/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-between px-5  grid grid-flow-col">
      <div className="w-60  flex  justify-start  items-center  col-span-0 ">
        <img
          className="w-[34px] mr-5 bg-yellow-400 rounded-lg "
          src={MenuIcon}
        />
        <img className="h-8 w-60   " alt="logo" src={logo} />
      </div>

      <div className=" flex flex-col col-span-4 justify-center">
        <div className=" p-2 flex">
          <input className="w-8/12 p-2 ml-4 rounded-lg border border-yellow-300 outline-none text-black" />
          <img
            className="w-11 ml-2  bg-yellow-400 rounded-lg p-2 "
            src={searchIcon}
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center col-span-1 w-12">
        <img className="w-11 " src={userIcon} />
      <Link to='/login'><span>Login</span></Link>
      </div>
    </div>
  );
};

export default Header;
