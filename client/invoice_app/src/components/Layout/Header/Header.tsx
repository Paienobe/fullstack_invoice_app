import logo from "../../../assets/logo.svg";
import user_image from "../../../assets/image-avatar.jpg";
import sun from "../../../assets/icon-sun.svg";
import moon from "../../../assets/icon-moon.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../context/Global/GlobalContext";

const Header = () => {
  const location = useLocation();
  const { setIsEditMode, setShowForm } = useGlobalContext();
  const [isDark] = useState(false);

  useEffect(() => {
    setShowForm(false);
    setIsEditMode(false);
  }, [location.pathname]);

  return (
    <header className="w-[5.625rem] bg-dark_blue h-screen fixed rounded-tr-[1.25rem] rounded-br-[1.25rem] overflow-hidden flex flex-col md:flex-row justify-between z-20 md:top-0 md:h-[5.625rem] md:w-full md:rounded-none">
      <Link to="/">
        <div className="w-full md:w-[5.625rem] h-[5.625rem] md:h-full flex items-center justify-center bg-purple rounded-br-[1.25rem] md:rounded-tr-[1.25rem] relative overflow-hidden group">
          <img src={logo} className="z-10" alt="" />
          <div className="w-full h-1/2 group-hover:h-3/4 transition-all duration-500 absolute bg-white opacity-20 bottom-0 rounded-tl-[1.25rem]"></div>
        </div>
      </Link>

      <div className="md:flex md:w-[12.5rem]">
        <div className="h-[4.5rem] md:h-full md:w-1/2 flex items-center justify-center">
          <div className="cursor-pointer py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-purple hover:bg-opacity-30">
            <img src={isDark ? moon : sun} alt="" />
          </div>
        </div>
        <div className="h-[4.5rem] md:h-full flex items-center justify-center border-t-[1.5px] border-white border-opacity-20 md:w-1/2 md:border-t-transparent md:border-l-[1.5px]">
          <img
            className="w-[2.5rem] h-[2.5rem] rounded-full"
            src={user_image}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
