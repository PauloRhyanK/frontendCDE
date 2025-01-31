import React from "react";

import ItemC from "./ItemC";

function Navbar({ pages }) {
  return (
    <nav className="navBar">
      <h1>Meus Ciclos</h1>
      <ul>
        {pages.map((tab, index) => (
          <ItemC index={index} tab={tab} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
