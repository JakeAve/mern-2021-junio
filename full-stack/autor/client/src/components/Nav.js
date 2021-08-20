import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const estáEnHome = pathname === "/";

  const enlacePrincipal = estáEnHome ? (
    <Link to="/new">Añadir nuevo autor</Link>
  ) : (
    <Link to="/">Inicio</Link>
  );

  return (
    <nav>
      <ul>
        <li>{enlacePrincipal}</li>
      </ul>
    </nav>
  );
};

export default Nav;
