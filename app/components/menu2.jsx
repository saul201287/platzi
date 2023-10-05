import React from "react";
import "../style/menu2.css";

function Menu2() {
  function elementVisibility2() {
    var elemento = document.getElementById("ExploreMenu");
    if (elemento.style.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  }
  return (
    <div className="Menu2" role="menu2">
      <div className="menu-cont">
        <div>
          <ul className="Menu-list">
            <li>
              <div className="Explore">
                <button
                  type="button"
                  onClick={elementVisibility2}
                  className="ExploreButton ExploreButton--item"
                  data-testid="ctaDropdown"
                >
                  Comunidad
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
                <section
                  className="ExploreMenu"
                  id="ExploreMenu"
                  style={{ display: "none" }}
                >
                  <div className="Explore-cont" tabIndex={1}>
                    <section className="menu-des">
                      <ul className="ItemsDropdown-list">
                        <li className="ItemsDropdown-item">
                          <a href="/comunidad/" className="ItemsDropdown-link">
                            <figure>
                              <img
                                src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_events_2ca1126afc.png"
                                srcSet="
                                          https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/header_community_dropdown_events_2ca1126afc.png   480w,
                                          https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/header_community_dropdown_events_2ca1126afc.png   768w,
                                          https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_events_2ca1126afc.png 1024w,
                                          https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/header_community_dropdown_events_2ca1126afc.png 1200w
                                        "
                                loading="lazy"
                                sizes="50vw"
                                alt="Eventos"
                                decoding="async"
                              />
                            </figure>
                            Eventos
                          </a>
                        </li>
                        <li className="ItemsDropdown-item">
                          <a href="/blog/" className="ItemsDropdown-link">
                            <figure>
                              <img
                                src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_blog2_a553e4c250.png"
                                srcSet="
                                          https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/header_community_dropdown_blog2_a553e4c250.png   480w,
                                          https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/header_community_dropdown_blog2_a553e4c250.png   768w,
                                          https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_blog2_a553e4c250.png 1024w,
                                          https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/header_community_dropdown_blog2_a553e4c250.png 1200w
                                        "
                                loading="lazy"
                                sizes="50vw"
                                alt="Blog"
                                decoding="async"
                              />
                            </figure>
                            Blog
                          </a>
                        </li>
                        <li className="ItemsDropdown-item">
                          <a href="/live/" className="ItemsDropdown-link">
                            <figure>
                              <img
                                src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_live_a2c75443e6.png"
                                srcSet="
                                          https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/header_community_dropdown_live_a2c75443e6.png   480w,
                                          https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/header_community_dropdown_live_a2c75443e6.png   768w,
                                          https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_live_a2c75443e6.png 1024w,
                                          https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/header_community_dropdown_live_a2c75443e6.png 1200w
                                        "
                                loading="lazy"
                                sizes="50vw"
                                alt="Live"
                                decoding="async"
                              />
                            </figure>
                            Live
                          </a>
                        </li>
                        <li className="ItemsDropdown-item">
                          <a href="/discord/" className="ItemsDropdown-link">
                            <figure>
                              <img
                                src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_discord_15d1f1b2cb.png"
                                srcSet="
                                          https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/header_community_dropdown_discord_15d1f1b2cb.png   480w,
                                          https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/header_community_dropdown_discord_15d1f1b2cb.png   768w,
                                          https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/header_community_dropdown_discord_15d1f1b2cb.png 1024w,
                                          https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/header_community_dropdown_discord_15d1f1b2cb.png 1200w
                                        "
                                loading="lazy"
                                sizes="50vw"
                                alt="Discord"
                                decoding="async"
                              />
                            </figure>
                            Discord
                          </a>
                        </li>
                      </ul>
                    </section>
                  </div>
                </section>
              </div>
            </li>
            <li>
              <div role="button" tabIndex="0">
                Planes
              </div>
            </li>
            <li>
              <div role="button" tabIndex="0">
                Contáctanos
              </div>
            </li>
            <li>
              <div role="button" tabIndex="0">
                Empresas
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu2;
