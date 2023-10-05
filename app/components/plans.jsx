import React from "react";
import "../style/plans.css";

function Plans() {
  return (
    <section className="Plans">
      <div className="u-wrapper">
        <div className="Plans-heading">
          <h2>Elige un plan</h2>
          <p>
            <span>
              Ahorra con un plan anual y accede a todos los cursos y contenidos
              exclusivos.
            </span>
            <br />
            Nunca subiremos el precio mientras mantengas tu suscripción activa.
          </p>
        </div>
        <div className="PricePlans PricePlans--desktop">
          <div className="PricePlans-container" id="tabla-Planes">
            <div className="PriceCard monthly_plan experiment-c PriceCard--darker">
              <div className="PriceCard-content">
                <div className="PriceCard-head">
                  <div className="PriceCard-info">
                    <div className="PriceCard-titleCont">
                      <h3 className="PriceCard-name">Basic</h3>
                      <p className="PriceCard-description">
                        Pago mensual con renovación automática cada mes para 1
                        persona
                      </p>
                    </div>
                    <div className="PriceCard-pricing">
                      <div className="PriceCard-price-info">
                        <div className="PriceCard-price">
                          <img
                            src="https://static.platzi.com/media/flags/MX.png"
                            srcSet="https://static.platzi.com/media/flags/MX.png"
                            alt="flag MXN"
                            className="PriceCard-flag"
                            width={16}
                            height={16}
                          />
                          <p className="PriceCard-priceValue">$619/mes</p>
                        </div>
                        <p className="PriceCard-description">
                          Pago mensual recurrente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="PriceCard-benefits">
                  <ul
                    aria-label="Beneficios de plan Basic"
                    className="Benefits"
                  >
                    <li className="Benefit Benefit--off Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="xmark"
                        className="svg-inline--fa fa-xmark Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Eventos exclusivos como la Platzi Conf
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Más de 1500 cursos y 17 escuelas
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">Certificados digitales</p>
                    </li>
                    <li className="Benefit Benefit--off Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="xmark"
                        className="svg-inline--fa fa-xmark Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Certificados físicos para rutas de perfil profesional
                      </p>
                    </li>
                    <li className="Benefit Benefit--off Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="xmark"
                        className="svg-inline--fa fa-xmark Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        English Academy, Escuela de Startups, Liderazgo y
                        Management
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="PriceCard-ctaSection">
                  <a
                    href="/comprar/basic/?course=todos"
                    color="platzi"
                    hierarchy="secondary"
                    id="PriceCard-cta-Basic"
                    className="Button Button--big Button--platzi Button--secondary PriceCard-cta"
                  >
                    Suscríbete a Basic
                  </a>
                </div>
              </div>
            </div>
            <div className="PriceCard expert_plan experiment-c PriceCard--darker PriceCard--highlight">
              <div className="PriceCard-content">
                <div className="PriceCard-hightlightFlag">Más popular</div>
                <div className="PriceCard-head">
                  <div className="PriceCard-info">
                    <div className="PriceCard-titleCont">
                      <h3 className="PriceCard-name">Expert</h3>
                      <p className="PriceCard-description">
                        Pago anual con renovación automática cada año para 1
                        persona
                      </p>
                    </div>
                  </div>
                  <div className="PriceCard-pricing">
                    <div className="PriceCard-price-info">
                      <div className="PriceCard-price">
                        <img
                          src="https://static.platzi.com/media/flags/MX.png"
                          alt="flag MXN"
                          className="PriceCard-flag"
                        />
                        <p className="PriceCard-priceValue">$366/mes</p>
                      </div>
                    </div>
                    <p className="PriceCard-description">
                      Un pago anual recurrente de{" "}
                      <strong className="PriceCard-description-price">
                        $4,390
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="PriceCard-benefits">
                  <ul
                    aria-label="Beneficios de plan Expert"
                    className="Benefits"
                  >
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Eventos exclusivos como la Platzi Conf
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Más de 1500 cursos y 17 escuelas
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">Certificados digitales</p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Certificados físicos para rutas de perfil profesional
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        English Academy, Escuela de Startups, Liderazgo y
                        Management
                      </p>
                    </li>
                  </ul>
                  <ul
                    aria-label="Información sobre pago en cuotas para el plan Expert"
                    className="ExtraBenefits"
                  >
                    <li className="ExtraBenefitItem">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="credit-card"
                        className="svg-inline--fa fa-credit-card ExtraBenefitItem-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                        ></path>
                      </svg>
                      <div className="ExtraBenefitItem-content">
                        <p style={{ margin: "0" }}>
                          Paga hasta en 12 meses <strong>sin intereses</strong>{" "}
                          con tarjeta de crédito o PayPal.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="PriceCard-ctaSection">
                  <a
                    href="/comprar/expert/?course=todos"
                    color="platzi"
                    hierarchy="primary"
                    id="PriceCard-cta-Expert"
                    className="Button Button--big Button--platzi Button--primary PriceCard-cta"
                  >
                    Suscríbete a Expert
                  </a>
                </div>
              </div>
            </div>
            <div className="PriceCard expert experiment-c PriceCard--darker">
              <div className="PriceCard-content">
                <div className="PriceCard-head">
                  <div className="PriceCard-info">
                    <div className="PriceCard-titleCont">
                      <h3 className="PriceCard-name">Expert Duo</h3>
                      <p className="PriceCard-description">
                        Pago anual con renovación automática cada año para 2 o 4
                        personas
                      </p>
                    </div>
                  </div>
                  <div className="PriceCard-pricing">
                    <div className="PriceCard-price-info">
                      <div className="PriceCard-price">
                        <img
                          src="https://static.platzi.com/media/flags/MX.png"
                          alt="flag MXN"
                          className="PriceCard-flag"
                        />
                        <p className="PriceCard-priceValue">$483/mes</p>
                      </div>
                      <p className="PriceCard-description">
                        Un pago anual recurrente de $5,790
                      </p>
                    </div>
                  </div>
                  <div className="StudentSelector">
                    <label className="Radio">
                      <input
                        type="radio"
                        name="annual_plan"
                        className="Radio-input Radio-input--checked"
                        defaultValue={"annual_plan"}
                      />
                      2 estudiantes
                    </label>
                    <label className="Radio">
                      <input
                        type="radio"
                        name="family_plan"
                        className="Radio-input"
                        defaultValue={"family_plan"}
                      />
                      4 estudiantes
                    </label>
                  </div>
                </div>
                <div className="PriceCard-benefits">
                  <ul
                    aria-label="Beneficios de plan Expert Duo"
                    className="Benefits"
                  >
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Eventos exclusivos como la Platzi Conf
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Más de 1500 cursos y 17 escuelas
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">Certificados digitales</p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Certificados físicos para rutas de perfil profesional
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        English Academy, Escuela de Startups, Liderazgo y
                        Management
                      </p>
                    </li>
                  </ul>
                  <ul
                    aria-label="Información sobre pago en cuotas para el plan Expert Duo"
                    className="ExtraBenefits"
                  >
                    <li className="ExtraBenefitItem">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="credit-card"
                        className="svg-inline--fa fa-credit-card ExtraBenefitItem-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                        ></path>
                      </svg>
                      <div className="ExtraBenefitItem-content">
                        <p style={{ margin: "0" }}>
                          Paga hasta en 12 meses <strong>sin intereses</strong>{" "}
                          con tarjeta de crédito o PayPal.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="PriceCard-ctaSection">
                  <a
                    color="platzi"
                    hierarchy="primary"
                    id="PriceCard-cta-Expert Duo"
                    className="Button Button--big Button--platzi Button--primary PriceCard-cta"
                    href="/comprar/expert-duo/?course=todos"
                  >
                    Suscríbete a Expert Duo
                  </a>
                </div>
              </div>
            </div>
            <div className="PriceCard b2b experiment-c PriceCard--darker">
              <div className="PriceCard-content">
                <div className="PriceCard-head">
                  <div className="PriceCard-info">
                    <div className="PriceCard-titleCont">
                      <h3 className="PriceCard-name">Business</h3>
                      <p className="PriceCard-description">
                        Pago anual con renovación automática cada año para
                        equipos de 4 a 30 licencias
                      </p>
                    </div>
                  </div>
                  <div className="PriceCard-pricing">
                    <div className="PriceCard-price">
                      <img
                        src="https://static.platzi.com/media/flags/MX.png"
                        alt="flag MXN"
                        className="PriceCard-flag"
                      />
                      <p className="PriceCard-priceValue">$416/mes/licencia</p>
                    </div>
                    <p className="PriceCard-description">
                      Un pago anual recurrente de $4,990/licencia
                    </p>
                  </div>
                  <div className="SliderSlots">
                    <div className="SlideRange">
                      <label htmlFor="10 estudiantes" className="SlideRange-label">
                        10 estudiantes
                      </label>
                      <input
                        type="range"
                        id="10 estudiantes"
                        name="10 estudiantes"
                        className="SlideRange-input"
                        min="4"
                        max="30"
                        defaultValue={10}
                        style={{ backgroundSize: "23.0769% 100%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="PriceCard-benefits">
                  <ul
                    aria-label="Beneficios de plan Business"
                    className="Benefits"
                  >
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Accede a los más de 1500 cursos de Platzi
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Analiza el avance de tu equipo con datos y estadísticas
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Recibe soporte de un Account Manager
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Evalúa los conocimientos de cada estudiante
                      </p>
                    </li>
                    <li className="Benefit Benefit--on Benefit--darker">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="check"
                        className="svg-inline--fa fa-check Benefit-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
                        ></path>
                      </svg>
                      <p className="Benefit-text">
                        Recibe certificados con el logo de Platzi y de tu
                        empresa para cada estudiante
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="PriceCard-ctaSection">
                  <a
                    href="/comprar/smb/business/?students=10"
                    color="platzi"
                    hierarchy="primary"
                    id="PriceCard-cta-Business"
                    className="Button Button--big Button--platzi Button--primary PriceCard-cta"
                  >
                    Suscríbete a Business
                  </a>
                  <p className="PriceCard-copyB2b">
                    ¿Más de 30 estudiantes?{" "}
                    <a href="https://platzi.com/lp/planes-hr">Agenda un demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
