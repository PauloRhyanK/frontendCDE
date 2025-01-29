import React from "react";
import { Link } from "react-router-dom";

function Navbar({ pages }) {
  return (
    <nav>
      <h1>Meus Ciclos</h1>
      <ul>
        {pages.map((tab, index) => (
          <li key={index}>
            <Link to={`/pages/${index}`}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
