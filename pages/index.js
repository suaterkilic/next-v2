import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import SearchIcon from "../components/header/SearchIcon";
import Categories from "../components/home/categories/Categories";
import Slider from "../components/home/slider/Slider";
import Product from "../components/home/product/Product";
import SectionBanner from "../components/home/banner/SectionBanner";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>BAFK Original</title>
        <link href="https://fonts.gstatic.com/" crossOrigin rel="preconnect" />
        <link
          rel="stylesheet"
          id="barberry_google_fonts-css"
          href="http://fonts.googleapis.com/css?family=Josefin+Sans%3A300%2C400%2C700%7CJosefin+Sans%3A600&amp;subset=latin-ext"
          type="text/css"
          media="all"
        />
      </Head>

      <div className="home page-template-default page page-id-3488 page-parent wp-embed-responsive  vc_responsive no-offcanvas-animation header-has-no-title header-has-overlap posts-has-parallax bb_classic_notif tag-cloud-default">
        <SearchIcon />
        <div id="bb-container" className="bb-container">
          <Layout>
            <div className="offcanvas_container">
              
              <div className="offcanvas_main_content">
                <div id="primary" className="default-width-page content-area">
                  <div id="content" className="site-content" role="main">
                    <div className="grid-container content-page-wrapper">
                      <div className="grid-x grid-margin-x">
                        <div className="cell large-12">
                          <article
                            id="post-3488"
                            className="post-3488 page type-page status-publish hentry"
                          >
                            <div className="entry-content">
                              <Slider />
                              <div className="vc_row-full-width vc_clearfix" />
                              <Categories />
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            <div
                              style={{}}
                              data-vc-full-width="true"
                              data-vc-full-width-init="false"
                              className="normal_height vc_row wpb_row vc_row-fluid"
                            >
                              <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <h3
                                      style={{ textAlign: "center" }}
                                      className="vc_custom_heading vc_custom_1541512558503"
                                    >
                                      Recent Products
                                    </h3>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#666666" }}>
                                            Recent posuere neque eu lectus
                                            ultrices
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: "20px" }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                    <Product />
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: "40px" }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            <div
                              style={{}}
                              className="normal_height vc_row wpb_row vc_row-fluid"
                            >
                              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-2">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper" />
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-8">
                                <div className="vc_column-inner vc_custom_1541501512790">
                                  <div className="wpb_wrapper">
                                    <div className="row vc_row wpb_row vc_inner vc_row-fluid">
                                      <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                          <div className="wpb_wrapper">
                                            <div className="wpb_text_column wpb_content_element ">
                                              <div className="wpb_wrapper">
                                                <h2
                                                  className="p1"
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  It’s all New,
                                                  <br />
                                                  It all arrived this week
                                                </h2>
                                                <p
                                                  style={{
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  <span
                                                    style={{ color: "#000000" }}
                                                  >
                                                    Furniture axe heirloom
                                                    ethical man bun sustainable.
                                                    Pickled normcore selvage,
                                                    bespoke four dollar toast
                                                    neutra chartreuse vinyl.
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="barberry-button-container b-button_center b-button-54585954">
                                              <a
                                                href="http://barberry.temashdesign.com/furniture/shop/"
                                                style={{
                                                  backgroundColor: "#000000",
                                                  borderColor: "#000000",
                                                }}
                                                className="b-button_normal button"
                                              >
                                                View All New Products
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: "80px" }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-2">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper" />
                                </div>
                              </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix" />
                            {/* .entry-content */}
                          </article>
                          {/* #post */}
                        </div>
                        {/* end cell large-12 */}
                      </div>
                      {/* end grid-x */}
                    </div>
                    {/* end grid-container */}
                  </div>
                  {/* end site-content */}
                  <div className="prefooter" />
                </div>
                <SectionBanner />
                {/* end content-area */}
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
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3488 current_page_item menu-item-3609">
                                <a href="index.html" aria-current="page">
                                  <span>Ana Sayfa</span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680">
                                <a href="hakkimizda/index.html">
                                  <span>Biz Kimiz</span>
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497">
                                <a href="category.html">
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
    </Fragment>
  );
}
