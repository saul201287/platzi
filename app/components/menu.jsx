import React from "react";
import "../style/menu.css";
function Menu() {
  return (
    <div className="subexplore" tabIndex={1}>
      <div className="categorias">
        <p className="titulo">CATEGORÍAS</p>
        <ul>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="code"
                className="svg-inline--fa fa-code"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                style={{ color: "#17871d" }}
              >
                <path
                  fill="currentColor"
                  d="M414.9 31.11L270.9 495.1C266.1 507.8 253.5 514.8 240.9 510.9C228.2 506.1 221.1 493.5 225.1 480.9L369.1 16.89C373 4.226 386.5-2.852 399.1 1.077C411.8 5.006 418.9 18.45 414.9 31.11V31.11zM504.4 118.5L632.4 238.5C637.3 243 640 249.4 640 255.1C640 262.6 637.3 268.1 632.4 273.5L504.4 393.5C494.7 402.6 479.6 402.1 470.5 392.4C461.4 382.7 461.9 367.6 471.6 358.5L580.9 255.1L471.6 153.5C461.9 144.4 461.4 129.3 470.5 119.6C479.6 109.9 494.7 109.4 504.4 118.5V118.5zM168.4 153.5L59.09 255.1L168.4 358.5C178.1 367.6 178.6 382.7 169.5 392.4C160.4 402.1 145.3 402.6 135.6 393.5L7.585 273.5C2.746 268.1 0 262.6 0 255.1C0 249.4 2.746 243 7.585 238.5L135.6 118.5C145.3 109.4 160.4 109.9 169.5 119.6C178.6 129.3 178.1 144.4 168.4 153.5V153.5z"
                ></path>
              </svg>
              Desarrollo e Ingeniería
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  "url(https://static.platzi.com/media/uploads/school_graphic_development_3d3b4073cf.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>5</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    DevOps y Cloud Computing
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Desarrollo Web
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Data Science e Inteligencia Artificial
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Programación y Software
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Blockchain y Web3
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="globe"
                className="svg-inline--fa fa-globe"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: "#c92387" }}
              >
                <path
                  fill="currentColor"
                  d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 464C263.4 464 282.1 456.8 303.6 415.6C312.4 397.9 319.1 376.4 325.6 352H186.4C192 376.4 199.6 397.9 208.4 415.6C229 456.8 248.6 464 256 464zM178.5 304H333.5C335.1 288.7 336 272.6 336 256C336 239.4 335.1 223.3 333.5 208H178.5C176.9 223.3 176 239.4 176 256C176 272.6 176.9 288.7 178.5 304V304zM325.6 160C319.1 135.6 312.4 114.1 303.6 96.45C282.1 55.22 263.4 48 256 48C248.6 48 229 55.22 208.4 96.45C199.6 114.1 192 135.6 186.4 160H325.6zM381.8 208C383.2 223.5 384 239.6 384 256C384 272.4 383.2 288.5 381.8 304H458.4C462.1 288.6 464 272.5 464 256C464 239.5 462.1 223.4 458.4 208H381.8zM342.1 66.61C356.2 92.26 367.4 124.1 374.7 160H440.6C419.2 118.9 384.4 85.88 342.1 66.61zM169.9 66.61C127.6 85.88 92.84 118.9 71.43 160H137.3C144.6 124.1 155.8 92.26 169.9 66.61V66.61zM48 256C48 272.5 49.93 288.6 53.57 304H130.2C128.8 288.5 128 272.4 128 256C128 239.6 128.8 223.5 130.2 208H53.57C49.93 223.4 48 239.5 48 256zM440.6 352H374.7C367.4 387.9 356.2 419.7 342.1 445.4C384.4 426.1 419.2 393.1 440.6 352zM137.3 352H71.43C92.84 393.1 127.6 426.1 169.9 445.4C155.8 419.7 144.6 387.9 137.3 352V352z"
                ></path>
              </svg>
              Inglés
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  "url(https://static.platzi.com/media/uploads/school_graphic_english_b477187ffa.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>1</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Platzi English Academy
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="megaphone"
                className="svg-inline--fa fa-megaphone"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{ color: "#1476b8" }}
              >
                <path
                  fill="currentColor"
                  d="M576 55.1V456C576 469.3 565.3 480 552 480C538.7 480 528 469.3 528 456V450.3L350.3 401.9C341.1 446.4 302.9 480 256 480C202.1 480 160 437 160 384C160 372.6 161.1 361.7 165.6 351.5L48 319.4V328C48 341.3 37.25 352 24 352C10.75 352 0 341.3 0 328V184C0 170.7 10.75 160 24 160C37.25 160 48 170.7 48 184V192.6L528 61.67V56C528 42.75 538.7 32 552 32C565.3 32 576 42.75 576 56V55.1zM528 400.6V111.4L48 242.3V269.7L528 400.6zM256 432C280.8 432 301.1 413.2 303.7 389.2L212.3 364.2C209.5 370.2 208 376.9 208 384C208 410.5 229.5 432 256 432H256z"
                ></path>
              </svg>
              Marketing
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  "url(https://static.platzi.com/media/uploads/school_graphic_marketing_6098510d4e.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>2</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Publicidad Digital
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Marketing Digital
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="seedling"
                className="svg-inline--fa fa-seedling"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: "#ce3b3e" }}
              >
                <path
                  fill="currentColor"
                  d="M436.4 32c-91 0-168.3 67.88-194.6 161.4C204.6 134.6 144 96 75.63 96L0 95.1V120C0 247.9 91.75 352 204.4 352H232v104C232 469.2 242.8 480 255.1 480S280 469.2 280 456V288h27.62C420.2 288 512 183.9 512 56V32H436.4zM204.4 304c-79.25 0-145.1-69.75-155.1-160h26.25c79.25 0 145.1 69.75 155.1 160H204.4zM307.6 240h-26.25c10-90.25 75.87-160 155.1-160h26.25C452.8 170.2 386.9 240 307.6 240z"
                ></path>
              </svg>
              Liderazgo
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  "url(https://static.platzi.com/media/uploads/school_graphic_soft_351e5c0f90.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>4</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Talento y Recursos Humanos
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Diversidad e Inclusión
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Habilidades Blandas
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Liderazgo y Management
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chart-line"
                className="svg-inline--fa fa-chart-line"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: "#ffbb00" }}
              >
                <path
                  fill="currentColor"
                  d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
                ></path>
              </svg>
              Negocios y Emprendimiento
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  "url(https://static.platzi.com/media/uploads/school_graphic_business_fa22370a52.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>3</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Finanzas e Inversiones
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Negocios
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    E-Commerce y Negocios Digitales
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="rocket"
                className="svg-inline--fa fa-rocket"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: "#218371" }}
              >
                <path
                  fill="currentColor"
                  d="M408 143.1C408 166.1 390.1 183.1 368 183.1C345.9 183.1 328 166.1 328 143.1C328 121.9 345.9 103.1 368 103.1C390.1 103.1 408 121.9 408 143.1zM23.1 288C15.38 288 7.414 283.4 3.145 275.9C-1.123 268.4-1.043 259.2 3.356 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H199.9C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.7 307.2 387.1 309.6 384 312.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 223.1 496.6 223.1 488V391.8C215.2 395.6 207.4 398.9 200.1 401.7C189.1 406.6 175.5 403.9 166.5 394.8L115.8 344.1C106.6 334.9 103.9 321.1 109.1 309.2C111.7 303.2 114.9 296 118.5 288L23.1 288zM461.7 50.32C398.4 41.85 309.1 51.1 246.1 143.7C216.8 188.1 178.1 271.9 157.6 318.1L192.6 353.1C239.1 333.2 323.9 295.2 368.3 265C460 202.9 470.2 113.6 461.7 50.32V50.32z"
                ></path>
              </svg>
              Startups
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  "url(https://static.platzi.com/media/uploads/school_graphic_startups_225d812cd7.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>1</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Startups
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="pen-nib"
                className="svg-inline--fa fa-pen-nib"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: "#81439d" }}
              >
                <path
                  fill="currentColor"
                  d="M368.4 18.34C390.3-3.526 425.7-3.526 447.6 18.34L493.7 64.4C515.5 86.27 515.5 121.7 493.7 143.6L412.2 225L371.6 374.1C366.7 391.9 353.5 406.1 336.1 412.2L71.97 505C53.47 511.5 32.89 506.8 19.03 492.1C5.168 479.1 .4845 458.5 6.982 440L99.79 175.9C105.9 158.5 120.1 145.3 137.9 140.4L286.1 99.77L368.4 18.34zM296.9 146.8L150.5 186.7C147.1 187.4 145.9 189.3 145.1 191.8L62.47 426.9L164.7 324.7C161.7 318.4 160 311.4 160 304C160 277.5 181.5 256 208 256C234.5 256 256 277.5 256 304C256 330.5 234.5 352 208 352C200.6 352 193.6 350.3 187.3 347.3L85.1 449.5L320.2 366.9C322.7 366.1 324.6 364 325.3 361.5L365.2 215.1L296.9 146.8z"
                ></path>
              </svg>
              Diseño y UX
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  " background-image: url(https://static.platzi.com/media/uploads/school_graphic_design_ba39a0c9e2.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>2</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Producto
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Diseño
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="video"
                className="svg-inline--fa fa-video"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{ color: "#ff8d0a" }}
              >
                <path
                  fill="currentColor"
                  d="M557.6 102.3c-11.53-7.406-25.88-8.391-38.28-2.688L416 147V128c0-35.35-28.65-64-64-64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64v-19.02l103.3 47.36c5.344 2.453 11.03 3.672 16.69 3.672c7.531 0 15.02-2.141 21.59-6.359C569.1 402.3 576 389.7 576 375.1V136C576 122.3 569.1 109.8 557.6 102.3zM368 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16V384zM528 363.5L416 312.2V199.8l112-51.33V363.5z"
                ></path>
              </svg>
              Contenido Digital
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                ></path>
              </svg>
            </span>
            <div
              className="schools"
              style={{
                backgroundImage:
                  " url(https://static.platzi.com/media/uploads/school_graphic_digital_content_340586f6c7.png)",
              }}
            >
              <p className="titulo">
                Escuelas <b>1</b>
              </p>
              <ul>
                <li>
                  <a
                    href="/escuela/devops-cloud/"
                    className="linksTinyBird"
                    data-id="8412"
                    data-page="explorer_desktop_school"
                  >
                    Contenido Audiovisual
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="chevron-right"
                      className="svg-inline--fa fa-chevron-right ExploreMenu-hover"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="/cursos/"
              data-trans="header_explore_exploreMenu_seeAll"
              style={{textDecoration: "none"}}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="list"
                className="svg-inline--fa fa-list"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM488 72C501.3 72 512 82.75 512 96C512 109.3 501.3 120 488 120H184C170.7 120 160 109.3 160 96C160 82.75 170.7 72 184 72H488zM488 232C501.3 232 512 242.7 512 256C512 269.3 501.3 280 488 280H184C170.7 280 160 269.3 160 256C160 242.7 170.7 232 184 232H488zM488 392C501.3 392 512 402.7 512 416C512 429.3 501.3 440 488 440H184C170.7 440 160 429.3 160 416C160 402.7 170.7 392 184 392H488zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"
                ></path>
              </svg>
              Ver todos los cursos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
