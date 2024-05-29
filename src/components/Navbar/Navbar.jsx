import React, { useEffect, useState } from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <h3 className="logo">Kaung-Dev</h3>
      <div>
        <ul className="nav-lists">
          <div className="underLine"></div>
          <li className="list list1">About</li>
          <li className="list list2">Skills</li>
          <li className="list list3">Projects</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
