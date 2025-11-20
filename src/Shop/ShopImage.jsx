import React from "react";

const ShopImage = (promps) => {
  return (
    <>
      <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="200">
        <div className="shop-thumb">
          <div className="shop-image-wrap">
            <a href="shop-detail.html">
              <img src={promps.path} className="shop-image img-fluid" alt="" />
            </a>

            <div className="shop-icons-wrap">
              <div className="shop-icons d-flex flex-column align-items-center">
                <a href="#" className="shop-icon">
                  <i class="fa-regular fa-heart"></i>
                </a>

                <a href="#" className="shop-icon">
                  <i class="fa-regular fa-bookmark"></i>
                </a>
              </div>

              <p className="shop-pricing mb-0 mt-3">
                <span className="badge custom-badge text-secondary">
                  {promps.price}
                </span>
              </p>
            </div>
          </div>

          <div className="shop-body">
            <h4>{promps.shopBody}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopImage;
