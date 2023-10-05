"use client";
import "./globals.css";
import Nav from "./components/nav";
import Carrusel from "./components/carrusel";
import { useEffect } from "react";
import Info from "./components/info";
import Cards from "./components/cards";
import Video from "./components/video";
import Comunidad from "./components/comunidad";
import Empresas from "./components/empresas";
import Prueba from "./components/prueba";
import Plans from "./components/plans";
import Footer from "./components/footer";
import Modal from "./components/modal";

export default function Home() {
  let scroll = {
    "--scrollY": " 0px",
  };
  useEffect(() => {
    const scrollY = () => {
      const n = document.getElementById("n");
      const posicion = n.getBoundingClientRect().top;
      const s = document.getElementById("s");
      s.style.setProperty("--scrollY", posicion * -1 + "px");
      console.log(posicion * -1);
    };
    window.addEventListener("scroll", scrollY);
    return () => {
      window.removeEventListener("scroll", scrollY);
    };
  }, []);

  return (
    <div className="home">
      <Modal />
      <div id="n">
        <Nav />
      </div>
      <section id="s" className="Hero Bg-animation" style={scroll}>
        <div className="Hero-content u-wrapper">
          <h1 className="Hero-content-title">
            <span>Para todos tus retos,</span> prepárate en Platzi
          </h1>
          <p className="Hero-content-subtitle">
            La comunidad de aprendizaje en línea donde desarrollas tus
            habilidades y potencias tu crecimiento profesional.
          </p>
          <p className="Hero-content-message">¿Qué quieres lograr?</p>
          <div className="Hero-content-input">
            <input defaultValue="" placeholder="Cuéntanos aquí" />
            <button type="submit" data-testid="search">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="paper-plane-top"
                className="svg-inline--fa fa-paper-plane-top "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M81.9 27.8C47.1 12.7 12.8 50.1 30.8 83.5l69.3 128.8c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L30.8 428.5c-18 33.4 16.3 70.8 51.1 55.7L523.8 292.7c32.1-13.9 32.1-59.5 0-73.4L81.9 27.8z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Carrusel />
      <Info />
      <Cards />
      <Video />
      <section className="Heading u-wrapper">
        <h2>Conocimiento para tomar el control de tu futuro profesional</h2>
      </section>
      <Comunidad />
      <Empresas />
      <Prueba />
      <Plans />
      <Footer />
    </div>
  );
}
