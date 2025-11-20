import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
const AboutBody = () => {
  return (
    <>
      <section className="featured-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="custom-block featured-custom-block">
                <h2 className="mt-2 mb-4">Opening Hours</h2>

                <div className="d-flex">
                  <i className="featured-icon bi-clock me-3"></i>

                  <div>
                    <p className="mb-2">
                      Mon - Friday ~
                      <strong className="d-inline">8:00 AM - 6:00 PM</strong>
                    </p>

                    <p className="mb-2">
                      Saturday ~
                      <strong className="d-inline">10:00 AM - 10:00 PM</strong>
                    </p>

                    <p>Sunday ~ Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section clasNames="about-section section-padding" id="section_2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <small className="section-small-title">Our Story</small>

              <h2 className="mt-2 mb-4">
                <span className="text-muted">Introducing</span> Moso
              </h2>

              <h4 className="text-muted mb-3">
                Since 1986, We crafted interior products for better spaces
              </h4>

              <p>
                Moso Interior is a free Bootstrap 5 HTML CSS template for your
                website. Tooplate is one of the best websites to download 100%
                free HTML Templates for web designers and developers around the
                world. Thank you for visiting.
              </p>
            </div>

            <div className="col-lg-3 col-md-5 col-5 mx-lg-auto">
              <img
                src="images/sharing-design-ideas-with-family.jpg"
                className="about-image about-image-small img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-4 col-md-7 col-7">
              <img
                src="images/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering.jpg"
                className="about-image img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBody;
