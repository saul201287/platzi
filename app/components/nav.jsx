"use client"
import React from "react";
import Link from "next/link";
import Sesiones from "./sesiones";
import Image from "next/image";
import "../style/nav.css";
import Logo from "../img/logo.webp";
import Menu from "./Menu";
import Menu2 from "./Menu2";

function Nav() {
  function elementVisibility() {
    var elemento = document.getElementById("menu");
    if (elemento.style.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  }
  
  return (
    <header className="cabezera" style={{ position: "relative" }}>
      <nav className="navegar">
        <div className="logo">
          <a href="/" className="log">
            <div className="logo-h">
              <figure style={{ marginInlineEnd: 0 }}>
                <Image src={Logo} alt="Logo" height={19} />
              </figure>
            </div>
          </a>
        </div>
        <div className="Explore">
          <button
            type="button"
            onClick={elementVisibility}
            className="ExploreButton ExploreButton--explore"
            data-testid="ctaDropdown"
            data-trans="header_explore_exploreButton"
          >
            Explorar
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              ></path>
            </svg>
          </button>
          <section className="menu" id="menu" style={{display: "none"}}>
            <Menu />
          </section>
        </div>
        <Menu2/>
        <Sesiones/>
      </nav>
    </header>
  );
}

export default Nav;
