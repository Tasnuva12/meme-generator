import React from "react";
import Logo from "../Images/Troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={Logo} />

      <h1></h1>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
