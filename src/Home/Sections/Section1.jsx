import React from 'react';

const Section1 = () => {
  return (
    <>
      <section className="hero-section hero-slide d-flex justify-content-center align-items-center home-back-ground" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 text-center mx-auto">
              <div className="hero-section-text">
                <small className="section-small-title">
                  Welcome to Moso Interior{" "}
                  <i className="bi bi-house"></i>
                </small>

                <h1 className="hero-title text-white mt-2 mb-4">
                  Decorate a beautiful interior for your space
                </h1>

                <form
                  className="custom-form hero-form"
                  action="#"
                  method="get"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">
                      <div className="input-group align-items-center">
                        <label htmlFor="product-name">Product</label>

                        <input
                          type="text"
                          name="product-name"
                          id="product-name"
                          className="form-control"
                          placeholder="Bathroom, Living Room..."
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-12">
                      <div className="input-group align-items-center">
                        <label htmlFor="last-name">Price</label>

                        <select
                          name="price-range"
                          className="form-select form-control"
                          id="price-range"
                          aria-label="Default select example"
                        >
                          <option value="500" defaultValue>
                            $500 to $990
                          </option>
                          <option value="1000">$1,000 - 2,900</option>
                          <option value="3000">$3,000 - 5,000</option>
                          <option value="5000">$5,000 - 10,000</option>
                          <option value="11000">$11,000 - 25,000</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-12">
                      <button type="submit" className="form-control">
                        Search
                      </button>
                    </div>
                  </div>
                </form>

                <div className="hero-btn d-flex justify-content-center align-items-center">
                  <a className="hero-btn-link smoothscroll" href="#section_2">
                    <i className="bi bi-arrow-down-short hero-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Section1;
