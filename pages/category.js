import React, { Fragment } from "react";
import Layout from "../components/layout";
import Header from "../components/categories/Header";
import SearchIcon from "../components/header/SearchIcon";
import Footer from "../components/footer/Footer";
import Filter from "../components/categories/Filter";
import Items from '../components/categories/Items';


const Category = () => {
  return (
    <Fragment>
      <div className="archive tax-product_cat term-erkek-esofmanlari term-148 wp-embed-responsive theme-barberry woocommerce woocommerce-page woocommerce-no-js wpb-js-composer js-comp-ver-6.3.0 vc_responsive no-offcanvas-animation woocommerce-shop header-has-title header-has-overlap catalog-ajax-filter shop-pagination-infinite_scroll blog-pagination-load_more_button posts-has-parallax bb_classic_notif tag-cloud-default">
        <SearchIcon />
        <div id="bb-container" className="bb-container">
          <Header />
          <div className="offcanvas_container">
            {/* begin offcanvas_main_content */}
            <div className="offcanvas_main_content">
              {/* begin page-header */}
              <div className="page-header page-title-default title-size-small title-design-default color-scheme-light with-back-btn">
                {/* begin title-section */}
                <div
                  className="title-section grid-container"
                  data-parallax='{"y" : -40, "smoothness": 10}'
                >
                  {/* begin title-section-wrapper */}
                  <div className="title-section-wrapper grid-x align-middle align-center">
                    {/* begin page-title-wrapper */}
                    <div className="title-wrapper">
                      <div className="breadcrumbs-wrapper">
                        <div className="breadcrumbs" itemProp="breadcrumb">
                          <span>
                            <a href="index.html">Home</a>
                          </span>
                          <span className="delimiter">/</span>
                          <span>Erkek Eşofmanlari</span>
                        </div>
                      </div>
                      {/* begin page-title-wrapper */}
                      <div className="page-title-wrapper">
                        <a href="category.html" className="back-btn">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 32 32"
                            enableBackground="new 0 0 32 32"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-back" />
                          </svg>
                        </a>
                        <h1 className="page-title entry-title">
                          Erkek Eşofmanlari
                        </h1>
                      </div>
                      {/* end .page-title-wrapper */}
                      <div className="term-description">
                        <p>
                          Dünyaca ünlü tasarımcıların imzasını taşıyan Erkek
                          Eşofmanları şimdi BAKF markası ile BAFK.com.tr’de.
                        </p>
                      </div>
                    </div>
                    {/* end .title-wrapper */}
                  </div>
                  {/* end .title-section-wrapper */}
                </div>
                {/* end .title-section */}
                {/* begin page-title-wrapper */}
                <div className="page-header-bg-wrapper">
                  <div
                    className="page-header-bg rellax"
                    data-rellax-speed="-1.5"
                    style={{
                      backgroundImage:
                        "url(http://bafkoriginal.com/theme/wp-content/uploads/2020/09/Untitled-1.jpg)",
                    }}
                  />
                </div>
                {/* end .page-title-wrapper */}
              </div>
              {/* end .page-header */}
              <div id="primary" className="footer-parent content-area">
                <main id="main" className="site-main" role="main">
                  {/* begin site-content */}
                  <div id="content" className="site-content " role="main">
                    {/* begin grid-container */}
                    <div className="grid-container content-page-wrapper">
                      {/* begin grid-x */}
                      <div className="grid-x grid-margin-x main-shop-container">
                        {/* begin cell */}
                        <div
                          className="small-12 large-12 cell "
                          id="content-section"
                        >
                          <div className="woocommerce-notices-wrapper" />
                          {/* begin woocommerce-archive-header */}
                          <Filter />
                          {/* end woocommerce-archive-header */}
                          <Items />                        
                        </div>
                        {/* end cell large-12 */}
                      </div>
                      {/* end grid-x */}
                    </div>
                    {/* end grid-container */}
                  </div>
                  {/* end site-content */}
                  <div id="content-section-bottom" />
                  <div className="prefooter" />
                </main>
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
                            <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-3497">
                              <a href="category.html">
                                <span>Erkek</span>
                              </a>
                              <ul className="menu vertical nested">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-4028">
                                  <a href="category.html" aria-current="page">
                                    <span>Eşofman</span>
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4052">
                                  <a href="category.html">
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
                            <a href="tel:+902122941112">+90 (212) 294 11 12</a>
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

          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
