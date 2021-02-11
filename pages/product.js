import React, { Fragment } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import SearchIcon from "../components/header/SearchIcon";
import ProductDetail from "../components/product/ProductDetail";
import ProductBanner from "../components/product/ProductBanner";
import ProductInterview from "../components/product/ProductInterview";

const Product = () => {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.gstatic.com/" crossOrigin rel="preconnect" />
        <link
          rel="stylesheet"
          id="barberry_google_fonts-css"
          href="http://fonts.googleapis.com/css?family=Josefin+Sans%3A300%2C400%2C700%7CJosefin+Sans%3A600&amp;subset=latin-ext"
          type="text/css"
          media="all"
        />
      </Head>
      <div className="barberry-has-cart-fixed product-template-default single single-product postid-3986 wp-embed-responsive theme-barberry woocommerce woocommerce-page woocommerce-no-js wpb-js-composer js-comp-ver-6.3.0 vc_responsive no-offcanvas-animation header-has-title header-has-overlap catalog-ajax-filter posts-has-parallax has-wishlist bb_classic_notif tag-cloud-default">
        <SearchIcon />
        <div id="bb-container" className="bb-container">
          
          
          <Layout>
            <div className="offcanvas_container">
              {/* begin offcanvas_main_content */}
              <div className="offcanvas_main_content">
                <div
                  id="primary"
                  className="footer-parent product-content-area"
                >
                  <div id="content" className="site-content" role="main">
                    <div className="product_layout product_layout_default ">
                      <div className="products-nav visible displayVisible">
                        <a
                          href="../basis-zip-througr-hoodie/index.html"
                          className="prev-product"
                        >
                          <div className="preview">
                            <div className="intrinsic">
                              <div className="image-center grid-x align-center">
                                <div className="image">
                                  <img
                                    width={500}
                                    height={700}
                                    src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-1black__40_2_2048x2048-500x700.jpg"
                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="prev-product__text">
                            <p className="link">Prev product</p>
                          </div>
                        </a>
                        <a
                          href="../contrast-core-plus-poly-tracksuit-top-blue/index.html"
                          className="next-product"
                        >
                          <div className="next-product__text">
                            <p className="link">Next product</p>
                          </div>
                          <div className="preview">
                            <div className="intrinsic">
                              <div className="image-center grid-x align-center">
                                <div className="image">
                                  <img
                                    width={500}
                                    height={700}
                                    src="https://bafk.com.tr/wp-content/uploads/2020/09/COREPLUSPOLYTRACKSUIT-BLUEGREY_2042_2048x2048-500x700.jpg"
                                    className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        id="product-3986"
                        className="product type-product post-3986 status-publish first instock product_cat-erkek-esofmanlari has-post-thumbnail sale sold-individually taxable shipping-taxable purchasable product-type-variable"
                      >
                        <ProductDetail />
                        <ProductBanner />
                        <ProductInterview />
                      </div>
                    </div>
                  </div>
                  <div className="prefooter" />
                </div>
                
              </div>
              {/* end offcanvas_main_content */}
              {/* Off-Canvas Aside Content Left */}
              <div className="offcanvas_aside offcanvas_aside_left">
                <div className="nano">
                  <div className="nano-content">
                    <div className="offcanvas_aside_content">
                      <div className="offcanvas_mainmenu">
                        <div className="close-icon">
                          <span className="close-icon_top" />
                          <span className="close-icon_bottom" />
                        </div>
                        {/* begin offcanvas-navs */}
                        <div className="offcanvas-navs">
                          <div className="header-mobiles-primary-menu">
                            <ul
                              id="menu-primary-menu-1"
                              className="vertical menu drilldown mobile-menu"
                              data-drilldown
                              data-close-on-click="true"
                              data-auto-height="true"
                              data-animate-height="true"
                              data-parent-link="true"
                              data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                            >
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3609">
                                <a href="index.html">
                                  <span>Ana Sayfa</span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680">
                                <a href="hakkimizda/index.html">
                                  <span>Biz Kimiz</span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children current_page_parent menu-item-3497">
                                <a href="magaza/index.html">
                                  <span>Erkek</span>
                                </a>
                                <ul className="menu vertical nested">
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4028">
                                    <a href="erkek-esofmanlari/index.html">
                                      <span>Eşofman</span>
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4052">
                                    <a href="erkek-sortlari/index.html">
                                      <span>Şort</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616">
                                <a href="blog/index.html">
                                  <span>Blog</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="header-mobiles-account-menu">
                            <ul
                              className="vertical menu drilldown mobile-menu"
                              data-drilldown
                              data-close-on-click="true"
                              data-auto-height="true"
                              data-animate-height="true"
                              data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                            >
                              <li className="offcanvas-my-account-link">
                                <a href="hesabim/index.html">
                                  <span>Hesabım</span>
                                </a>
                              </li>
                              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--wishlist ">
                                <a href="favorilerim/index.html">
                                  <span>Favorilerim</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end offcanvas-navs */}
                        <div className="offcanvas-bottom">
                          <hr className="menu-horizontal-rule" />
                          <ul className="social-icons">
                            <li className="facebook">
                              <a target="_blank" title="Facebook" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-facebook" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a target="_blank" title="Twitter" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-twitter" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a target="_blank" title="Pinterest" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-pinterest" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                            <li className="googleplus">
                              <a target="_blank" title="Google Plus" href="#">
                                <svg
                                  className="svg-icon"
                                  viewBox="0 0 24 24"
                                  enableBackground="new 0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <use x={0} y={0} xlinkHref="#i-googleplus" />
                                </svg>
                                <span className="s-circle_bg" />
                              </a>
                            </li>
                          </ul>
                          {/* begin offcanvas-contact-section */}
                          <div className="offcanvas-contact-section">
                            <div className="offcanvas-contact">
                              <a href="mailto:info@bafk.com.tr">
                                info@bafk.com.tr
                              </a>
                              <br />
                              <a href="tel:+902122941112">
                                +90 (212) 294 11 12
                              </a>
                              <br />
                            </div>
                          </div>
                          {/* end offcanvas-contact-section */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end offcanvas_aside_left */}
              {/* Off-Canvas Aside Content Right */}
              <div className="offcanvas_aside offcanvas_aside_right">
                <div className="offcanvas_aside_content">
                  <div className="offcanvas_minicart">
                    <div className="offcanvas_header">
                      <div className="close-icon">
                        <span className="close-icon_top" />
                        <span className="close-icon_bottom" />
                      </div>
                    </div>
                    <div className="widget woocommerce widget_shopping_cart">
                      <h2 className="widgettitle">Sepet</h2>
                      <div className="widget_shopping_cart_content" />
                    </div>
                  </div>
                </div>
              </div>
              {/* end offcanvas_aside_right */}
              {/* Off-Canvas Aside Content Top */}
              <div className="offcanvas_aside offcanvas_aside_top site-search">
                <div className="nano">
                  <div className="nano-content">
                    <div className="offcanvas_aside_content">
                      {/* begin offcanvas_search */}
                      <div className="offcanvas_search woocommerce">
                        {/* begin grid-container */}
                        <div className="grid-container">
                          <button className="close-icon">
                            <span className="close-icon_top" />
                            <span className="close-icon_bottom" />
                          </button>
                          {/* begin search-header */}
                          <div className="search-header">
                            <p className="search-text">
                              What are you looking for?
                            </p>
                            <div className="widget_product_search">
                              <div className="search-wrapp">
                                <form
                                  className="woocommerce-product-search search-form  barberry-ajax-search"
                                  role="search"
                                  method="get"
                                  action="https://bafk.com.tr/"
                                  data-thumbnail={1}
                                  data-price={1}
                                  data-post_type="product"
                                  data-count={8}
                                >
                                  <div>
                                    <input
                                      type="text"
                                      defaultValue
                                      name="s"
                                      id="search-input"
                                      className="search-field search-input"
                                      placeholder="Start typing..."
                                      autoComplete="on"
                                    />
                                    <input
                                      type="hidden"
                                      name="post_type"
                                      defaultValue="product"
                                    />
                                    <a
                                      role="button"
                                      tabIndex={0}
                                      className="search-clear"
                                    >
                                      Clear
                                    </a>
                                    <div className="search_label">
                                      <div className="search_label-text" />
                                    </div>
                                    <input type="submit" defaultValue="Ara" />
                                  </div>
                                </form>
                                <div className="search-results-wrapp">
                                  <div className="barberry-search-loader" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end search-header */}
                        </div>
                        {/* end grid-container */}
                      </div>
                      {/* end offcanvas_search */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end offcanvas_aside_top */}
              <div className="offcanvas_overlay" />
              <div className="navigation_overlay" />
              <div className="topbar_overlay" />
            </div>
          </Layout>
        </div>
      </div>
      <div className="barberry-add-to-cart-fixed">
  <div className="barberry-wrap-content-inner">
    <div className="barberry-wrap-content grid-container">
      <div className="barberry-wrap-content-sections grid-x align-middle">
        <div className="barberry-fixed-product-info cell shrink">
          <div className="barberry-thumb-clone"><img src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-200x200.jpg" /></div>
          <div className="barberry-title-clone">
            <h3>Basis Zip Through Hooide Grey</h3>
            <span className="price">
              <del>
                <span className="amount">
                  <span className="woocommerce-Price-amount amount">
                    <bdi><span className="woocommerce-Price-currencySymbol">₺</span>109<sup>,90</sup></bdi>
                  </span>
                </span>
              </del>
              <ins>
                <span className="amount">
                  <span className="woocommerce-Price-amount amount">
                    <bdi><span className="woocommerce-Price-currencySymbol">₺</span>89<sup>,90</sup></bdi>
                  </span>
                </span>
              </ins>
            </span>
          </div>
        </div>
        <div id="barberry-fixed-product-variations-wrap" className="barberry-fixed-product-variations-wrap cell auto">
          <div id="barberry-fixed-product-variations" className="barberry-fixed-product-variations">
            <div className="barberry-attr-wrap-clone barberry-attr-wrap-1 tawcvs-swatches">
              <span className="barberry-attr-clone swatch-clone-1 barberry-attr-label-clone barberry-attribute_pa_beden" data-target=".swatch-1">XS<span className="swatch__tooltip">XS</span></span>
              <span className="barberry-attr-clone swatch-clone-2 barberry-attr-label-clone barberry-attribute_pa_beden" data-target=".swatch-2">S<span className="swatch__tooltip">S</span></span>
              <span className="barberry-attr-clone swatch-clone-3 barberry-attr-label-clone barberry-attribute_pa_beden" data-target=".swatch-3">M<span className="swatch__tooltip">M</span></span>
              <span className="barberry-attr-clone swatch-clone-4 barberry-attr-label-clone barberry-attribute_pa_beden" data-target=".swatch-4">L<span className="swatch__tooltip">L</span></span>
              <span className="barberry-attr-clone swatch-clone-5 barberry-attr-label-clone barberry-attribute_pa_beden" data-target=".swatch-5">XL<span className="swatch__tooltip">XL</span></span>
              <span className="barberry-attr-clone swatch-clone-6 barberry-attr-label-clone barberry-attribute_pa_beden" data-target=".swatch-6">XXL<span className="swatch__tooltip">XXL</span></span>
            </div>
          </div>
        </div>
        <div className="barberry-fixed-product-btn cell shrink">
          <div className="barberry-single-btn-clone single_variation_wrap-clone barberry-clone-disable">
            <div className="woocommerce-variation-add-to-cart-clone">
              <div className="addtocart-button-group">
                <div className="quantity hidden">
                  <input type="hidden" className="qty" name="quantity" defaultValue={1} />
                </div>
                <div className="button-group-inner">
                  <div className="addtocart-button-group-inner">
                    <button type="submit" className="single_add_to_cart_button button alt progress-btn disabled wc-variation-selection-needed">
                      <div className="btn-text">Sepete Ekle</div>
                      <div className="progress" />
                      <div className="checked" />
                    </button>
                    <input type="hidden" name="add-to-cart" defaultValue={3986} />
                    <input type="hidden" name="product_id" defaultValue={3986} />
                    <input type="hidden" name="variation_id" className="variation_id" defaultValue={0} />
                  </div>
                </div>
              </div>
              <div className="woocommerce-variation-mob-btn-clone button">
                <div className="btn-text">Sepete Ekle</div>
                <div className="progress" />
                <div className="checked" />
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

export default Product;
