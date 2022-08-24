import React from "react";
import "./Topbar.scss";
import { useState, useEffect } from "react";
import useScrollDirection from "../../helpers/useScrollDirection";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            J
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <p className="line1"></p>
            <p className="line2"></p>
            <p className="line3"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
