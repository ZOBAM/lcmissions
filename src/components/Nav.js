import { useState } from "react";
import { NavLink } from "react-router-dom";
import lc_logo from "./../lc_logo.png";
import lc_header from "./../lc_header.png";
import NavMenu from "./NavMenu";

function Nav() {
  const [showMenu, setShowMenu] = useState(true);
  /* function handleClick() {
    setShowMenu(!showMenu);
  } */
  var classNames = require("classnames");
  var toggleClass = classNames(
    "md:flex md:mx-2 absolute md:block right-0 top-10 md:top-0",
    { hidden: showMenu }
  );
  const listStyleClass =
    "hover:bg-white text-left bg-gray-500 z-20 md:bg-gray-700 h-12 -mt-2 px-4";
  const linkClass =
    "p-2 whitespace-nowrap flex justify-center items-center text-white hover:text-black";
  return (
    <div
      className="h-44 md:h-72 bg-pink-900 relative bg-cover mb-4"
      style={{ backgroundImage: 'url("./' + lc_header + '")' }}
    >
      <nav className="flex justify-between p-2 bg-gray-800 absolute bottom-0 w-full max-h-12 ">
        <div className="h-24 border-gray-50 z-20 w-24 rounded-full bg-gray-400 relative bottom-8 flex justify-center items-center bg-gray-800">
          <NavLink to="/">
            <img src={lc_logo} className="h-20 w-20" alt="logo" />
          </NavLink>
        </div>
        <div className="relative">
          <span className="md:hidden">
            <NavMenu />
          </span>
          <ul className={toggleClass}>
            <li className={listStyleClass}>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li className={listStyleClass}>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
            <li className={listStyleClass}>
              <NavLink to="/support" className={linkClass}>
                Support Us
              </NavLink>
            </li>
            <li className={listStyleClass}>
              <NavLink to="/our_belief" className={linkClass}>
                Our Belief
              </NavLink>
            </li>
            {/* <li className={listStyleClass}>
              <NavLink to="/events" className={linkClass}>
                Events
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export { Nav };
