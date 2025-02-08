import "./Navbar.css";
import React from "react";
import ItemC from "./ItemC";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ pages }) {
  const [tabSelect, setTabSelect] = useState(); // Home pronta, criar home

  return (
    <nav className="navBar">
      <Link className="noLink" to="/">
        <h1>Home</h1>
      </Link>
      <div>
        <h1>Meus Ciclos</h1>
      </div>
      <ul>
        {pages.map((tab, index) => (
          <ItemC
            key={index}
            onClick={setTabSelect}
            index={index}
            tab={tab}
            check={tabSelect === index}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
