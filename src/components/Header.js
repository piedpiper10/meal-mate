import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("check header component render".btnNameReact);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-cotainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            onClick={() =>
              btnNameReact.includes("Login")
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
