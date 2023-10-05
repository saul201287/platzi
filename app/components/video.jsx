import React from "react";
import "../style/video.css";

function Video() {
  return (
    <section className="VideoDiscover">
      <div className="VideoDiscover-video">
        <video
          data-testid="video"
          preload="none"
          muted
          autoPlay
          loop
          playsInline
        >
          <source
            type="video/mp4"
            src="https://static.platzi.com/media/uploads/video_desktop_2_de542cd596.mp4"
          />
        </video>
        <div className="VideoDiscover-overlay"></div>
      </div>
      <section className="VideoDiscover-container">
        <section className="VideoDiscover-content u-wrapper">
          <h2>Descubre por dónde comenzar</h2>
          <p role="paragraph">
            Haz el test y descubre la profesión ideal para ti
          </p>
          <a
            href="/forms/profile_test/"
            color="sky"
            hierarchy="primary"
            className="Button Button--medium Button--sky Button--primary primary-btn"
          >
            Hacer test
          </a>
        </section>
      </section>
    </section>
  );
}

export default Video;
