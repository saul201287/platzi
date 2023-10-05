import React from "react";
import "../style/comunidad.css";

function Comunidad() {
  return (
    <section className="Community">
      <div className="u-wrapper">
        <div className="Community-container">
          <div className="HeadingWithCta-content">
            <div className="HeadingWithCta-heading">
              <h2>Platzi sí funciona</h2>
              <p style={{margin: "0"}}>
                Nuestros estudiantes crecen, crean conexiones profesionales y
                usan la educación digital a su favor.
              </p>
            </div>
          </div>
          <div className="Community-proof">
            <div className="VideoCard">
              <div className="VideoCard-video">
                <video data-testid="video" preload="metadata">
                  <source
                    type="video/mp4"
                    src="https://static.platzi.com/ms-landings-admin/media/2203_Juanduque_testimonio_9x16_2_28b367b268.mp4#t=0.5"
                  />
                  <track default="" kind="captions" />
                </video>
                <div className="VideoCard-controls">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="play"
                    className="svg-inline--fa fa-play "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    ></path>
                  </svg>
                </div>
                <div className="VideoCard-overlay"></div>
                <div className="VideoCard-message">
                  <p style={{ margin: "0" }}>
                    ”Mi propia vida es el testimonio de que ha funcionado”
                  </p>
                </div>
              </div>
              <div className="VideoCard-content">
                <p>Juan Duque</p>
                <span></span>
              </div>
            </div>
            <div className="VideoCard">
              <div className="VideoCard-video">
                <video data-testid="video" preload="metadata">
                  <source
                    type="video/mp4"
                    src="https://static.platzi.com/ms-landings-admin/media/2304_alma_rangel_TESTIMONIO_9_X16_2_4d2054c183.mp4#t=0.5"
                  />
                  <track default="" kind="captions" />
                </video>
                <div className="VideoCard-controls">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="play"
                    className="svg-inline--fa fa-play "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    ></path>
                  </svg>
                </div>
                <div className="VideoCard-overlay"></div>
                <div className="VideoCard-message">
                  <p style={{ margin: "0" }}>
                    “Me ayudó a abrir el panorama de las cosas posibles en
                    internet”
                  </p>
                </div>
              </div>
              <div className="VideoCard-content">
                <p>Alma Rangel</p>
                <span></span>
              </div>
            </div>
            <div className="VideoCard">
              <div className="VideoCard-video">
                <video data-testid="video" preload="metadata">
                  <source
                    type="video/mp4"
                    src="https://static.platzi.com/ms-landings-admin/media/2203_Daniel_Valdivieso_Testimonio_9x16_2_f41b662bf5.mp4#t=0.5"
                  />
                  <track default="" kind="captions" />
                </video>
                <div className="VideoCard-controls">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="play"
                    className="svg-inline--fa fa-play "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                    ></path>
                  </svg>
                </div>
                <div className="VideoCard-overlay"></div>
                <div className="VideoCard-message">
                  <p style={{ margin: "0" }}>
                    “Platzi es una herramienta que te permite tomar control de
                    tu vida”
                  </p>
                </div>
              </div>
              <div className="VideoCard-content">
                <p>Daniel Valdivieso</p>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comunidad;
