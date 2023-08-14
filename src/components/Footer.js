import React from "react";
import { navHref, tabsHref } from "./Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {tabsHref.map((eachHref) => {
          return (
            <li key={eachHref.id}>
              <a href={eachHref.href} className="footer-link">
                {eachHref.name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {navHref.map((eachHref) => {
          return (
            <li key={eachHref.id}>
              <a href={eachHref.href} target="_blank" className="footer-icon">
                <i className={eachHref.name}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
