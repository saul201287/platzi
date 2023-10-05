import React from "react";
import "../style/info.css";

function Info() {
  return (
    <section className="BulletExplainer">
      <div className="u-wrapper">
        <div className="BulletExplainer-content">
          <h2 className="BulletExplainer-heading" data-trans="">
            ¿CÓMO APRENDES CON PLATZI?
          </h2>
          <h3 className="BulletExplainer-title" data-trans="">
            Te damos las herramientas para crecer
          </h3>
          <ul className="BulletExplainer-bullets">
            <li className="BulletExplainer-bullet">
              <h4 className="BulletExplainer-bulletTitle">Crea</h4>
              <p
                className="BulletExplainer-bulletDescription"
              >
                Adquiere el conocimiento necesario para convertir tus ideas en
                nuevos proyectos.
              </p>
            </li>
            <li className="BulletExplainer-bullet">
              <h4 className="BulletExplainer-bulletTitle">Comparte</h4>
              <p
                className="BulletExplainer-bulletDescription"
              >
                Conecta con una comunidad de estudiantes y profesionales para
                potenciar tu aprendizaje.
              </p>
            </li>
            <li className="BulletExplainer-bullet">
              <h4 className="BulletExplainer-bulletTitle">Transforma</h4>
              <p
                className="BulletExplainer-bulletDescription "
              >
                Genera impacto con grandes proyectos que cambien al mundo.
              </p>
            </li>
          </ul>
          <div className="BulletExplainer-triangle"></div>
        </div>
      </div>
    </section>
  );
}

export default Info;
