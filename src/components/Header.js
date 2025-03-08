import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("check header component render".btnNameReact);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="flex justify-between m-4 p-4 border border-solid border-black bg-pink-200 shadow-lg">
      <div>
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4"
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
