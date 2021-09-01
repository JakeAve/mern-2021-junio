import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../providers/UserProvider";

const Nav = () => {
  const { logout, user } = useUser();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home</Link>
          {!user ? <Link to="/login"> Login</Link> : ""}
          <Link to="/register"> Register</Link>
        </li>
      </ul>
      {user ? <button onClick={logout}>Logout</button> : ""}
      {user ? <div>Welcome, {user.firstName}</div> : ""}
    </nav>
  );
};

export default Nav;
