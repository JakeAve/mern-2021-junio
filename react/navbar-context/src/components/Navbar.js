import React from "react";
import { useUsuarioContext } from "../contexts/userContext";

const Navbar = () => {
  const { nombre: usuario = "" } = useUsuarioContext();
  return <nav>{usuario}</nav>;
};

export default Navbar;
