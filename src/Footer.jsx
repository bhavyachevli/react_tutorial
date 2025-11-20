import React from "react";

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{display: 'block', margin: 0, padding: 0, verticalAlign: 'top'}}><path fill="#36363e" fillOpacity="1" d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,149.3C560,139,640,149,720,176C800,203,880,245,960,250.7C1040,256,1120,224,1200,229.3C1280,235,1360,277,1400,298.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg><footer className="site-footer section-padding" style={{marginTop: '-1px', paddingTop: 0}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5 col-12 mb-3">
              <h3>
                <a href="index.html" className="custom-link mb-1">
                  Moso Interior
                </a>
              </h3>

              <p className="text-white">
                Since 1986, We crafted interior products for better spaces
              </p>
            </div>

            <div className="col-lg-3 col-md-3 col-12 ms-lg-auto mb-3">
              <h3 className="text-white mb-3">Store</h3>

              <p className="text-white mt-2">
                <i className="fa-solid fa-location-dot"></i>
                Berlin, Germany
              </p>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-3">
              <h3 className="text-white mb-3">Contact Info</h3>

              <p className="text-white mb-1">
                <i className="fa-solid fa-phone-volume"></i>

                <a href="tel: 090-080-0760" className="text-white ms-2">
                  +91 9106111366
                </a>
              </p>

              <p className="text-white mb-0">
                <i className="fa-solid fa-envelope"></i>

                <a href="mailto:info@company.com" className="text-white ms-2">
                  bhavyachevli@gmail.com
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-md-7 copyright-text-wrap col-12 d-flex flex-wrap align-items-center mt-4 ms-auto">
              <p className="copyright-text mb-0 me-4">
                Copyright © Moso Interior 2048
              </p>

              <ul className="social-icon">
                <li className="social-icon-item">
                  <a
                    href="#"
                    className="social-icon-link social-icon-twitter"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="#"
                    className="social-icon-link social-icon-facebook"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="#"
                    className="social-icon-link social-icon-instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="#"
                    className="social-icon-link social-icon-pinterest"
                  >
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="#"
                    className="social-icon-link social-icon-whatsapp"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
