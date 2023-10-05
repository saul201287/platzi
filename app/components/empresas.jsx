import React from "react";
import Image from "next/image";
import "../style/empresas.css";

function Empresas() {
  return (
    <section className="CtaBusiness">
      <div className="u-wrapper">
        <div className="CtaBusiness-container">
          <div className="HeadingWithCta-content">
            <div className="HeadingWithCta-heading">
              <h2>Platzi empresas</h2>
              <p style={{ margin: "0" }}>
                Potencia el talento de tu equipo con capacitación en liderazgo,
                inteligencia artificial aplicada al trabajo, inglés y más.
              </p>
            </div>
            <a
              href="/business/"
              color="sky"
              hierarchy="primary"
              className="Button Button--medium Button--sky Button--primary cta-btn"
            >
              Ir a Platzi for Business
            </a>
          </div>
          <div className="CtaBusiness-brands">
            <Image
              src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Google_e06c7248d9.svg"
              srcSet="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/Company_Google_e06c7248d9.svg 480w, https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/Company_Google_e06c7248d9.svg 768w, https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Google_e06c7248d9.svg 1024w, https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/Company_Google_e06c7248d9.svg 1200w"
              loading="lazy"
              className="CtaBusiness-brands-brand google"
              sizes="50vw"
              alt="Google Logo"
              decoding="async"
              width={1024}
              height={85}
            />
            <Image
              src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Stripe_77facb7078.svg"
              srcSet="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/Company_Stripe_77facb7078.svg 480w, https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/Company_Stripe_77facb7078.svg 768w, https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Stripe_77facb7078.svg 1024w, https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/Company_Stripe_77facb7078.svg 1200w"
              loading="lazy"
              className="CtaBusiness-brands-brand stripe"
              sizes="50vw"
              alt="Stripe Logo"
              decoding="async"
              width={1024}
              height={85}
            />
            <Image
              src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Harvard_Business_School_7151d625c4.svg"
              srcSet="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/Company_Harvard_Business_School_7151d625c4.svg 480w, https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/Company_Harvard_Business_School_7151d625c4.svg 768w, https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Harvard_Business_School_7151d625c4.svg 1024w, https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/Company_Harvard_Business_School_7151d625c4.svg 1200w"
              loading="lazy"
              className="CtaBusiness-brands-brand hardvard"
              sizes="50vw"
              alt="Hardvard Businnes School Logo"
              decoding="async"
              width={1024}
              height={85}
            />
            <Image
              src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Git_Lab_0c04d3d8e0.svg"
              srcSet="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/Company_Git_Lab_0c04d3d8e0.svg 480w, https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/Company_Git_Lab_0c04d3d8e0.svg 768w, https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Git_Lab_0c04d3d8e0.svg 1024w, https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/Company_Git_Lab_0c04d3d8e0.svg 1200w"
              loading="lazy"
              className="CtaBusiness-brands-brand gitlab"
              sizes="50vw"
              alt="GitLab Logo"
              decoding="async"
              width={1024}
              height={85}
            />
            <Image
              src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Y_Combinator_025a5a4366.svg"
              srcSet="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/Company_Y_Combinator_025a5a4366.svg 480w, https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/Company_Y_Combinator_025a5a4366.svg 768w, https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Y_Combinator_025a5a4366.svg 1024w, https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/Company_Y_Combinator_025a5a4366.svg 1200w"
              loading="lazy"
              className="CtaBusiness-brands-brand y-combinator"
              sizes="50vw"
              alt="Y Combinator Logo"
              decoding="async"
              width={904}
              height={24}
            />
            <Image
              src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Microsoft_b0de58073c.svg"
              srcSet="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/uploads/Company_Microsoft_b0de58073c.svg 480w, https://static.platzi.com/cdn-cgi/image/width=768,quality=85,format=auto/media/uploads/Company_Microsoft_b0de58073c.svg 768w, https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/media/uploads/Company_Microsoft_b0de58073c.svg 1024w, https://static.platzi.com/cdn-cgi/image/width=1200,quality=85,format=auto/media/uploads/Company_Microsoft_b0de58073c.svg 1200w"
              loading="lazy"
              className="CtaBusiness-brands-brand microsoft"
              sizes="50vw"
              alt="Microsoft Logo"
              decoding="async"
              width={1024}
              height={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empresas;
