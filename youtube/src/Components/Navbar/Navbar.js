import { FiMenu, FiSearch } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FaUser, FaMicrophone } from "react-icons/fa";
import logo from "../../Img/Videos.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  px-5 py-3 lg:px-4">
      {/* Left Side */}
      <div className="flex items-center shrink-0">
        <FiMenu className="w-6 h-6" />
        <div className="pl-4">
          <img src={logo} alt="Videos Logo" className="w-32 " />
        </div>
      </div>
      {/* Middle */}
      <div className="hidden relative  sm:flex w-full  max-w-[45rem] ">
        <input
          type="search"
          placeholder="Search"
          className="p-2 rounded-full outline-0 bg-slate-100 pl-4  w-full placeholder:text-center ml-6"
        />
        <div className="absolute ml-3">
          <FiSearch className="m-3 mr-1.5 " />
        </div>
        <FaMicrophone className="m-3 mr-1.5" />
      </div>
      {/* Right */}
      <div className="flex h-full items-center gap-3">
        <FiSearch className="sm:hidden  h-6 w-6 " />
        <GrAppsRounded className="sm:hidden  h-6 w-" />
        <IoMdSettings className="h-6 w-6 " />
        <div className="flex items-center bg-red-500 p-1 rounded-full text-white">
          <FaUser className="h-5 w-5 ml-2 mr-1.5" />
          <p className="font-bold mr-1.5 whitespace-nowrap"> Log in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
