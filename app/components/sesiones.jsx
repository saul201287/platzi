import React from "react";
import "../style/sesiones.css";
function Sesiones() {
  function openModal() {
    document.getElementById("show").className =
      "Modal-wrapper showModal Modal-wrapper--bottom";
    let pantalla = document.getElementById("pantalla");
    pantalla.style.display = "block";
  }
  return (
    <section className="Nav-header-mobileCtas-actions">
      <button
        color="sky"
        hierarchy="primary"
        className="Button Button--medium Button--sky Button--primary Nav-header-mobileCtas-actions--join"
        onClick={openModal}
      >
        Crear cuenta
      </button>
      <a href="/login">
        <button
          color="sky"
          hierarchy="primary"
          className="Button Button--medium Button--sky Button--primary Nav-header-mobileCtas-actions--login"
        >
          Iniciar sesión
        </button>
      </a>
    </section>
  );
}

export default Sesiones;
