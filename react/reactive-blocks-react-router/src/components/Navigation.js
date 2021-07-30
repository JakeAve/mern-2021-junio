import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/alpha">Alpha</Link>
        </li>
        <li>
          <Link to="/beta">Beta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
