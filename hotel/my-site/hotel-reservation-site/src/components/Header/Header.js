import React from "react";
import "../../styles/main.scss";
import { Link,useLocation } from "react-router-dom";
import Divider from "../Divider/Divider";
// import logo from "../Logo/Logo.png";
import '../../styles/main.scss'

const Header = () => {
  const location = useLocation();
  return (
    <div className="header container-custom">

    <div className="">
      <div>
        <nav>
          <ul className="nav-links">
            <li className={location.pathname === "/" && "active"}>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className={location.pathname === "/onlinereservation" && "active" }>
              <Link to="/onlinereservation">رزرو آنلاین </Link>
            </li>
            <li className="nav-links__gallery">
              <a>گالری </a>
              <ul className="nav-links__gallery--submenu">
                <li><a>اتاق ها</a></li>

                <Divider></Divider>
                
                <li><a>امکانات هتل</a></li>

                 <Divider></Divider>

                <li> <a>غذاهای موجود</a></li>
               
              </ul>
            </li>
            <li className={location.pathname === "/facilities" && "active" }>
              <Link to="/facilities"> بخش رزرواسیون </Link>
            </li>
            <li className={location.pathname === "/aboutusmore" && "active" }>
              <Link to="/aboutusmore">درباره ما</Link>
            </li>
            <li className={location.pathname === "/contactusmore" && "active" }>
              <Link to="/contactusmore">تماس با ما </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="logo">
        <h3>هتل آریا</h3>
        <img src={logo} alt="logo" />
      </div> */}
    </div>
    </div>
  );
};

export default Header;
