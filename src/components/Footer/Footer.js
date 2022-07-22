import React from "react";
import "./Footer.scss";
import { socialLinks } from "../../data";

export default function Footer() {
  return (
    <div className="footer">
      <h1>More Links</h1>
      <div className="icons">
        {socialLinks.map((icon) => (
          <a className="icon" href={icon.src}>
            <img src={icon.img} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
