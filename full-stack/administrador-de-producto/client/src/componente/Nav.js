import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="home-link">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
