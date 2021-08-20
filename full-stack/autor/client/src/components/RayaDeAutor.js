import React from "react";
import { Link } from "react-router-dom";

const RayaDeAutor = (props) => {
  const { _id, nombre } = props;

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <Link to={`/${_id}`}>Edit</Link>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default RayaDeAutor;
