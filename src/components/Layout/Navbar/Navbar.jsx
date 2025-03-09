import "./Navbar.css";
import React from "react";
import ItemC from "./ItemC";
import { useState } from "react";
import { Link } from "react-router-dom";
import NewCiclo from "../../NewCiclo";

function Navbar({ pages, newPages }) {
  const [tabSelect, setTabSelect] = useState(); // Home pronta, criar home

  return (
    <nav className="navBar">
      <Link className="noLink" to="/">
        <h1>Home</h1>
      </Link>
      <div>
        <NewCiclo setArray={newPages} />
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
