import React, { Fragment } from "react";

const Categories = () => {
  return (
    <Fragment>
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="normal_height vc_row wpb_row vc_row-fluid"
      >
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="woocommerce columns-4">
                <div className="grid-container">
                  <div className="grid-x grid-margin-x">
                    <div className="cell large-12">
                      <ul className="products columns-4 category-grid-layout-1 product-grid-layout-1 ">
                        <li className="product-category product first">
                          <div className="category_wrapper">
                            <div className="category_image">
                              <a
                                href="urun-kategori/erkek-esofmanlari/index.html"
                                className="category-image"
                              >
                                <img
                                  src="/images/category/1.jpg"
                                  alt="Erkek Eşofmanlari"
                                  width={500}
                                  height={700}
                                />
                              </a>
                            </div>
                            <div className="category_details">
                              <a href="urun-kategori/erkek-esofmanlari/index.html">
                                <div className="more-products">4 ürün</div>
                                <h2 className="category-title">
                                  Erkek Eşofmanlari
                                </h2>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="product-category product">
                          <div className="category_wrapper">
                            <div className="category_image">
                              <a
                                href="urun-kategori/erkek-sortlari/index.html"
                                className="category-image"
                              >
                                <img
                                  src="/images/category/1.jpg"
                                  alt="Erkek Şortları"
                                  width={500}
                                  height={700}
                                />
                              </a>
                            </div>
                            <div className="category_details">
                              <a href="urun-kategori/erkek-sortlari/index.html">
                                <div className="more-products">6 ürün</div>
                                <h2 className="category-title">
                                  Erkek Şortları
                                </h2>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
