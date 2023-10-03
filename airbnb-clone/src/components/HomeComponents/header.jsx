import React from "react";
import logo from "../../assets/airbnb.svg";
import menu from "../../assets/menu-icon.svg";
import { BiSearch } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="px-2   lg:px-20  border-b-[1px] border-gray-200">
      <div className="w-full flex justify-between items-center  h-[82px]  ">
        <div className="w-[110px] md:flex hidden  ">
          <img src={logo} alt="logo" className=""></img>
        </div>

        <div className="lg:px-5 px-0 w-full md:max-w-[368px]">
          <div className="border-[1px] border-[#dbdbdb] shadow-lg rounded-3xl flex md:min-w-[368px] w-full justify-between items-center p-2 transition duration-100 hover:shadow-xl">
            <div className=" font-semibold flex sm:hidden ml-4 ">Search...</div>
            <div className="font-semibold pl-2 cursor-pointer text-black hidden sm:flex">
              Anywhere
            </div>
            <div className="bg-gray-200 border rounded-lg w-[0.5px] h-[30px]  hidden sm:flex"></div>
            <div className="font-semibold cursor-pointer text-black  hidden sm:flex">
              Any Week
            </div>
            <div className="bg-gray-200 border rounded-lg w-[0.5px] h-[30px]  hidden sm:flex"></div>
            <div className="cursor-pointer text-gray-500  hidden sm:flex">Add guests</div>
            <button className="bg-[#ff4949] rounded-full p-2  hidden sm:flex">
              <BiSearch color="white" />
            </button>
          </div>
        </div>

        <div className="flex items-center sm:p-2 ml-2  ">
          <div className="p-2 rounded-2xl font-semibold mr-3 px-3 hover:bg-[#ededed] md:flex items-center cursor-pointer hidden ">
            Airbnb your home
          </div>
          <div className="text-[21px] p-2 rounded-full mr-3 hover:bg-[#ededed] lg:flex items-center cursor-pointer  hidden">
            <HiOutlineGlobeAlt />
          </div>
          <div className="p-[7px] w-[76px] rounded-3xl flex border-[1px] border-[#dbdbdb] cursor-pointer  transition duration-100 hover:shadow-md ">
            <div className=" flex items-center mr-4 ">
              <img src={menu} alt="menu" className="w-[13px]" />
            </div>

            <div className="text-[30px]">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
