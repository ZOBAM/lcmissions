import { useState } from "react";
import { Link } from "react-router-dom";
import lc_logo from "./../lc_logo.png";
import lc_header from "./../lc_header.png";

function Nav() {
  const [showMenu, setShowMenu] = useState(true);
  function handleClick() {
    setShowMenu(!showMenu);
  }
  var classNames = require("classnames");
  var toggleClass = classNames(
    "md:flex md:mx-2 absolute md:block right-0 top-10 md:top-0",
    { hidden: showMenu }
  );
  const listStyleClass =
    "hover:bg-white text-left bg-white md:bg-gray-700 h-12 -mt-2 px-4";
  const linkClass =
    "p-2 whitespace-nowrap flex justify-center items-center text-white hover:text-black";
  return (
    <div
      className="h-44 md:h-72 bg-pink-900 relative bg-cover mb-4"
      style={{ backgroundImage: 'url("./' + lc_header + '")' }}
    >
      <nav className="flex justify-between p-2 bg-gray-800 absolute bottom-0 w-full max-h-12">
        <div className="h-24 border-gray-50 z-20 w-24 rounded-full bg-gray-400 relative bottom-8 flex justify-center items-center bg-gray-800">
          <Link to="/">
            <img src={lc_logo} className="h-20 w-20" alt="logo" />
          </Link>
        </div>
        <div className="relative">
          <span className="md:hidden" onClick={handleClick}>
            Menu <span className="mdi mdi-menu"></span>{" "}
          </span>
          <ul className={toggleClass}>
            <li className={listStyleClass}>
              <Link to="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li className={listStyleClass}>
              <Link to="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
            <li className={listStyleClass}>
              <Link to="/support" className={linkClass}>
                Support Us
              </Link>
            </li>
            <li className={listStyleClass}>
              <Link to="/our_belief" className={linkClass}>
                Our Belief
              </Link>
            </li>
            <li className={listStyleClass}>
              <Link to="/events" className={linkClass}>
                Events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export { Nav };
