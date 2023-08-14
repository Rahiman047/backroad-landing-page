import React from "react";
import logo from "../images/logo.svg";
import { navHref, tabsHref } from "./Data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {tabsHref.map((eachHref) => {
            return (
              <li key={eachHref.id}>
                <a href={eachHref.href} className="nav-link">
                  {" "}
                  {eachHref.name}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {navHref.map((eachHref) => {
            return (
              <li key={eachHref.id}>
                <a href={eachHref.href} target="_blank" className="nav-icon">
                  <i className={eachHref.name}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

export { tabsHref, navHref };
