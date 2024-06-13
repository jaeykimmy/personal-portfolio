import React from "react";
import "./Footer.scss";
import { socialLinks } from "../../data";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        {socialLinks.map((icon) => (
          <a className="icon" href={icon.src} key={icon.name}>
            <img src={icon.img} alt="" />
          </a>
        ))}
        <p>Copyright © Jaeyoung Kim 2024</p>
      </div>
    </div>
  );
}
