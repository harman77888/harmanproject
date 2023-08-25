import React from "react";
import logo from "../../Logo.png";
import Search from "../../search.png"
import img from "../../chevron-down.png"
import love from "../../heart.png"
import cart from "../../add shopping-bag.png"
import { Link , Outlet } from "react-router-dom";
const Header = ({bgColor}) => {
  return (
    <>
    <header className={`header ${bgColor == true && "bg-black"}`}>
    <div className="container">

        <nav className="search">  
              <div className="input1">
                <img src={logo} alt="error" className="img1"/>
                <div className="input2">
                  <img src={Search} alt="error" />
                  <input  type="text"  placeholder="Search something" className="input"/>
                </div>
              </div>

            <div className="left1">
              <ul className="home">
                <li><Link to="/">HOME</Link></li>
                <li className="shop"><Link to="/shop">SHOP<img src={img} alt="error"/></Link></li>
                <li><Link to="#">BLOG</Link></li>
                <li><Link to="#">ABOUT US</Link></li>
              </ul>
              <ul className="love">
                  <li><Link to="#"><img src={love} alt="error"/>LOVE</Link></li>
                  <li><Link to="/cart"><img src={cart} alt="error"/>CART</Link></li>
                </ul>
              </div>
        </nav>
      </div>

    </header>
    <Outlet />
  </>
  );
};

export default Header;
