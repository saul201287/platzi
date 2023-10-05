import React from "react";
import "../style/prueba.css";

function Prueba() {
  return (
    <section className="NewAccount">
      <h2 className="NewAccount-title">
        Prueba Platzi,
        <br /> <span className="NewAccount-title-hightlighted">sin costo</span>
      </h2>
      <p className="NewAccount-subtitle">
        Crea tu cuenta y toma tus primeras clases ahora.
      </p>
      <button
        color="sky"
        hierarchy="primary"
        className="Button Button--medium Button--sky Button--primary primary-btn"
      >
        Crear Cuenta
      </button>
    </section>
  );
}

export default Prueba;
