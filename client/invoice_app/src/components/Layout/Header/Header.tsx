import logo from "../../../assets/logo.svg";
import user_image from "../../../assets/image-avatar.jpg";
import sun from "../../../assets/icon-sun.svg";
import moon from "../../../assets/icon-moon.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../context/Global/GlobalContext";
import LogoutBtn from "../../UI/LogoutBtn/LogoutBtn";
import { logoutUser } from "../../../utils";

const Header = () => {
  const location = useLocation();
  const { setIsEditMode, setShowForm, setLoginResponse } = useGlobalContext();
  const [isDark] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    setShowForm(false);
    setIsEditMode(false);
  }, [location.pathname]);

  if (location.pathname == "/sign-up" || location.pathname == "/login") {
    return null;
  }

  const logout = () => {
    setShowLogout(false);
    logoutUser(setLoginResponse);
  };

  return (
    <header className="w-[5.625rem] bg-dark_blue h-screen fixed rounded-tr-[1.25rem] rounded-br-[1.25rem] overflow-hidden flex flex-col lg:flex-row justify-between z-20 lg:top-0 lg:h-[5.625rem] lg:w-full lg:rounded-none">
      <Link to="/">
        <div className="w-full lg:w-[5.625rem] h-[5.625rem] lg:h-full flex items-center justify-center bg-purple rounded-br-[1.25rem] lg:rounded-tr-[1.25rem] relative overflow-hidden group">
          <img src={logo} className="z-10" alt="" />
          <div className="w-full h-1/2 group-hover:h-3/4 transition-all duration-500 absolute bg-white opacity-20 bottom-0 rounded-tl-[1.25rem]"></div>
        </div>
      </Link>

      <div className="lg:flex lg:w-[12.5rem]">
        <div className="h-[4.5rem] lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="cursor-pointer py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-purple hover:bg-opacity-30">
            <img src={isDark ? moon : sun} alt="" />
          </div>
        </div>
        <div className="h-[4.5rem] lg:h-full flex items-center justify-center border-t-[1.5px] border-white border-opacity-20 lg:w-1/2 lg:border-t-transparent lg:border-l-[1.5px] relative">
          <img
            className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer"
            src={user_image}
            alt=""
            onClick={() => setShowLogout(!showLogout)}
          />
          {showLogout && <LogoutBtn logoutFunc={logout} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
