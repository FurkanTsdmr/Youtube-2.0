import { FiMenu } from "react-icons/fi";
import logo from "../../Img/Videos.png";

const Navbar = () => {
  return (
    <div>
      {/* Left Side */}
      <div className="">
        <FiMenu className="w-12 h-12" />
        <img src={logo} alt="" />
      </div>
      {/* Middle */}
      {/* Right */}
    </div>
  );
};

export default Navbar;
