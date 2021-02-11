import React, { Fragment } from "react";
import Link from 'next/link';

const Product = () => {
  return (
    <Fragment>
      <div className="woocommerce columns-4 ">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell large-12">
              <ul className="products columns-4 category-grid-layout-1 product-grid-layout-1 ">
                <li className="product-card product type-product post-3986 status-publish last instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable">
                  <div className="product-inner-wrapper">
                    <div className="product-labels labels-bordered">
                      <span className="onsale product-label">-18%</span>
                    </div>
                    <div className="product-inner">
                      <div className="product-image">
                        <Link href="/product">
                          <a
                            className="loop-thumbnail product-thumbnail-single"
                          >
                            <img
                              width={500}
                              height={700}
                              src="http://bafkoriginal.com/theme/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-500x700.jpg"
                              className
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </Link>
                        <div className="footer-section">
                          <div className="footer-section-inner">
                            <Link href="/product">
                              <a
                                data-quantity={1}
                                className="button product_type_variable add_to_cart_button barberry_addtocart_button"
                                data-product_id={3986}
                                data-product_sku
                                aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                                rel="nofollow"
                              >
                                <span className="tooltip">Seçenekler</span>
                                Seçenekler
                              </a>
                            </Link>
                            <Link href="/product">
                              <a
                                data-product-id={3986}
                                data-product-type="variable"
                                data-wishlist-url="favorilerim/index.html"
                                data-browse-wishlist-text="Favorilerim"
                                className="button barberry_product_wishlist_button add_to_wishlist"
                                rel="nofollow"
                              >
                                <span className="tooltip">Favorilere Ekle </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-details-wrapper">
                        <div className="product-details">
                          <h3 className="product-title">
                            <Link href="/product">
                              <a>
                                Basis Zip Through Hooide Grey
                              </a>
                            </Link>
                          </h3>
                          <span className="price">
                            <del>
                              <span className="amount">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol">
                                      ₺
                                    </span>
                                    109
                                    <sup>,90</sup>
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
                                    89
                                    <sup>,90</sup>
                                  </bdi>
                                </span>
                              </span>
                            </ins>
                          </span>
                          <Link href="/product">
                            <a
                              data-quantity={1}
                              className="button product_type_variable add_to_cart_button barberry_addtocart_button"
                              data-product_id={3986}
                              data-product_sku
                              aria-label="“Basis Zip Through Hooide Grey” için seçenekleri seçin"
                              rel="nofollow"
                            >
                              <span className="tooltip">Seçenekler</span>
                              Seçenekler
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* .cell */}
          </div>
          {/* .grid-x */}
        </div>
        {/* .grid-container */}
      </div>
    </Fragment>
  );
};

export default Product;
