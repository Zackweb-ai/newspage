import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import Ham from "../assets/images/Hamburger_icon.svg";
import x from "../assets/images/x.svg";

function Nav() {
  const [isopen, setIsOpen] = useState(true);
  let close = !isopen;
  const open = () => {
    setIsOpen(!isopen);
  };
  return (
    <nav className="blur">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <div className="mobile">
          <div className="part">
            <img
              onClick={open}
              className={`ham ${isopen ? "show" : ""}`}
              src={Ham}
              alt=""
            />
          </div>
          <div className={`part2 ${close ? "show slide" : ""}`}>
            <div className="end">
              <img
                onClick={open}
                className={`x ${close ? "show" : ""}`}
                src={x}
                alt=""
              />
            </div>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">New</a>
              </li>
              <li>
                <a href="">Popular</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
              <li>
                <a href="">Categories</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="desktop">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Trending</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
