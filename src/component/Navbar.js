// import "../assets/Navbar.css";
import "../assets/Navbar02.css";
import logo from "../assets/img/logo.png";
import dropdown from "../assets/img/dropdown.svg";
import notification from "../assets/img/notification.svg";
import search from "../assets/img/search.svg";
import avatar from "../assets/img/avatar.png";
import burger from "../assets/img/burger.svg";
import React, { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header>
      <div className="headerleft">
        <img className="logo" src={logo} alt="Netflix" />
        <nav className={menuOpen ? "open" : ""}>
          <a className="">Découverte</a>
          <a className="">Séries TV</a>
          <a className="">Films</a>
          <a className="">Programmes originaux</a>
          <a className="">Ajouts récents</a>
          <a className="">Ma liste</a>
        </nav>
      </div>
      <a className="burger"
      onClick={()=>setMenuOpen(!menuOpen)}>
        <img className="burgericon" src={burger} />
      </a>
      <div className="headerright">
        <a>
          <img src={search} />
        </a>
        {/* <a>Jeunesse</a> */}
        <a>
          <img src={notification} />
        </a>
        <a className="avatar">
          <img src={avatar} />
          <img className="avatardropdown" src={dropdown} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
