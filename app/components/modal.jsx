import React from "react";

function Modal() {
    function cerrar() {
        let p = document.getElementById("show").className = "Modal-wrapper Modal-wrapper--bottom";
        let pantalla = document.getElementById("pantalla");
        pantalla.style.display = "none";
      }
  return (
    <div id="RegisterModal">
      <div className="Modal">
        <div
          id="pantalla"
          className="Modal-overlay"
          role="button"
          tabindex="0"
          style={{ display: "block" }}
        ></div>
        <div id="show" className="Modal-wrapper Modal-wrapper--bottom">
          <div className="ModalBase">
            <button
              aria-label="modalbase_close"
              type="button"
              color="sky"
              onClick={cerrar()}
              hierarchy="primary"
              className="Button Button--medium Button--sky Button--primary"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
