import React, { Fragment } from "react";
import Link from "next/link";

const Items = () => {
  return (
    <Fragment>
      <div id="shop-content" className="shop-content">
        <div className="shop-content-inner">
          <div id="shop-loading" className="shop-loading">
            <div className="barberry-loader" />
          </div>
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <ul className="products columns-3 category-grid-layout-1 product-grid-layout-1 ">
                  
                 
                  
                  <li className="product type-product displayVisible post-4002 status-publish first instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                    <div className="product-inner-wrapper">
                      <div className="product-labels labels-bordered">
                        <span className="onsale product-label">-17%</span>
                      </div>
                      <div className="product-inner">
                        <div className="product-image">
                          <a
                            className="loop-thumbnail product-thumbnail-single"
                            href="product/contrast-core-plus-poly-tracksuit-top-blue/index.html"
                          >
                            <img
                              width={500}
                              height={700}
                              src="/images/product/cover.jpg"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                          <div className="footer-section">
                            <div className="footer-section-inner">
                              <a
                                href="product/contrast-core-plus-poly-tracksuit-top-blue/index.html"
                                data-quantity={1}
                                className="button product_type_variable add_to_cart_button barberry_addtocart_button"
                                data-product_id={4002}
                                data-product_sku="true"
                                aria-label="“Contrast Core Plus Poly Tracksuit Top Blue” için seçenekleri seçin"
                                rel="nofollow"
                              >
                                <span className="tooltip">Seçenekler</span>
                                Seçenekler
                              </a>
                              <a
                                href="index4863.html?add_to_wishlist=4002"
                                data-product-id={4002}
                                data-product-type="variable"
                                data-wishlist-url="favorilerim/index.html"
                                data-browse-wishlist-text="Favorilerim"
                                className="button barberry_product_wishlist_button add_to_wishlist"
                                rel="nofollow"
                              >
                                <span className="tooltip">
                                  Favorilere Ekle{/* */}{" "}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product-details-wrapper">
                          <div className="product-details">
                            <h3 className="product-title">
                              <a href="product/contrast-core-plus-poly-tracksuit-top-blue/index.html">
                                Contrast Core Plus Poly Tracksuit Top Blue
                              </a>
                            </h3>
                            <span className="price">
                              <del>
                                <span className="amount">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        ₺
                                      </span>
                                      119<sup>,90</sup>
                                    </bdi>
                                  </span>
                                </span>
                              </del>{" "}
                              <ins>
                                <span className="amount">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        ₺
                                      </span>
                                      99<sup>,90</sup>
                                    </bdi>
                                  </span>
                                </span>
                              </ins>
                            </span>
                            <a
                              href="product/contrast-core-plus-poly-tracksuit-top-blue/index.html"
                              data-quantity={1}
                              className="button product_type_variable add_to_cart_button barberry_addtocart_button"
                              data-product_id={4002}
                              data-product_sku="true"
                              aria-label="“Contrast Core Plus Poly Tracksuit Top Blue” için seçenekleri seçin"
                              rel="nofollow"
                            >
                              <span className="tooltip">Seçenekler</span>
                              Seçenekler
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Items;
