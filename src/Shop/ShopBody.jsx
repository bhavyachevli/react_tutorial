import React from "react";
import ShopImage from "./ShopImage";

const ShopBody = () => {
  return (
    <>
      <section className="shop-section section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <small className="section-small-title">Moso Design Shop</small>

              <h2 className="mt-2 mb-4">
                <span className="tooplate-red">Interior</span> Products
              </h2>
            </div>
            <ShopImage
              path="/images/shop/minimal-bathroom-interior-design-with-wooden-furniture.jpg"
              price="$3,600"
              shopeBody="bathrom"
            />
            <ShopImage
              path="/images/shop/mock-up-poster-modern-dining-room-interior-design-with-white-empty-wall.jpg"
              price="$3,600"
              shopeBody="bathroom"
            />
            <div className="col-lg-4 col-12">
              <div className="shop-thumb">
                <div className="shop-image-wrap">
                  <a href="shop-detail.html">
                    <img
                      src="/images/shop/green-sofa-white-living-room-with-blank-table-mockup.jpg"
                      className="shop-image img-fluid"
                      alt=""
                    />
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
                        $2,400
                      </span>
                    </p>
                  </div>
                </div>

                <div className="shop-body">
                  <h4>Living Room</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="shop-thumb">
                <div className="shop-image-wrap">
                  <a href="shop-detail.html">
                    <img
                      src="/images/shop/concept-home-cooking-with-female-chef.jpg"
                      className="shop-image img-fluid"
                      alt=""
                    />
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
                        $3,800
                      </span>
                    </p>
                  </div>
                </div>

                <div className="shop-body">
                  <h4>Chef Kitchen</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="shop-thumb">
                <div className="shop-image-wrap">
                  <a href="shop-detail.html">
                    <img
                      src="/images/shop/childrens-bed-nursery-cot-velvet-childrens-room.jpg"
                      className="shop-image img-fluid"
                      alt=""
                    />
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
                        $850
                      </span>
                    </p>
                  </div>
                </div>

                <div className="shop-body">
                  <h4>Childrens Bedroom</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>

                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ShopBody;
