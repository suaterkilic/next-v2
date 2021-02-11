import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <header className="site-header header-default header-color-light header-has-bg">
        {/* begin header-inner */}
        <div className="header-inner">
          {/* begin header-wrapper */}
          <div className="header-wrapper grid-container">
            {/* begin header-sections */}
            <div className="header-sections grid-x align-middle">
              {/* begin left-nav */}
              <div className="left-nav barberry-navigation cell auto">
                <nav className="navigation-foundation">
                  <ul
                    id="menu-primary-menu"
                    className="dropdown menu"
                    data-dropdown-menu
                    data-hover-delay={150}
                    data-closing-time={0}
                  >
                    <li
                      id="menu-item-3609"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3609"
                    >
                      <Link href="/">
                        <a>
                          <span>Ana Sayfa</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-3680"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680"
                    >
                      <Link href="/about">
                        <a>
                          <span>Biz Kimiz</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-3497"
                      className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-3497 active dropdown is-dropdown-submenu-parent is-mega-menu"
                    >
                      <Link href="/category">
                        <a className="dropdown-toggle">
                          <span>Erkek</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-3616"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"
                    >
                      <a href="blog/index.html">
                        <span>Blog</span>
                      </a>
                    </li>
                  </ul>
                  <div className="menu-trigger grid-x align-middle">
                    <div className="nav_burger cell shrink">
                      <span className="burger_top" />
                      <span className="burger_middle" />
                      <span className="burger_bottom" />
                    </div>
                    <div className="menu-title cell auto">
                      <span>Menu</span>
                    </div>
                  </div>
                </nav>
              </div>
              {/* end left-nav */}
              {/* begin site-branding */}
              <div className="site-branding cell shrink text-center">
                <Link href="/">
                  <a rel="home">
                    <img
                      className="site-logo"
                      src="http://bafkoriginal.com/theme/wp-content/themes/barberry/images/barberry-logo-light.svg"
                      title="The Original"
                      alt="BAFK"
                    />
                    <img
                      className="site-logo-light"
                      src="http://bafkoriginal.com/theme/wp-content/themes/barberry/images/barberry-logo-light.svg"
                      title="The Original"
                      alt="BAFK"
                    />
                    <img
                      className="sticky-logo"
                      src="http://bafkoriginal.com/theme/wp-content/themes/barberry/images/barberry-logo-light.svg"
                      title="The Original"
                      alt="BAFK"
                    />
                  </a>
                </Link>
              </div>
              {/* end site-branding */}
              {/* begin tools */}
              <div className="tools cell auto text-right">
                {/* begin header-expanded-view */}
                <div className="header-expanded-view">
                  <div className="header-expanded-view-inner">
                    <span id="header-search" className="header-search">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-search" />
                      </svg>
                    </span>
                    <a
                      href="favorilerim/index.html"
                      className="header-wishlist"
                    >
                      <svg
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                      >
                        <use x={0} y={0} xlinkHref="#i-wishlist" />
                      </svg>
                      <sup className="wishlist_items_number">0</sup>
                    </a>
                    <div className="header-account navigation-foundation">
                      <ul
                        className="dropdown menu my-account-form  my-account-has-drop "
                        data-close-on-click="false"
                        data-close-on-click-inside="false"
                        data-click-open="false"
                        data-dropdown-menu
                        data-hover-delay={150}
                        data-closing-time={0}
                        data-alignment="right"
                      >
                        <li>
                          <a data-open="head_loginModal">
                            <span>Hesabım</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end header-expanded-view */}
                <Link href="/cart">
                  <a className="link header-cart ">
                    <span className="header-cart-title">Sepet</span>
                    <span className="header-cart-count">
                      <span className="header-cart-count-background" />
                      <span className="header-cart-count-number">0</span>
                    </span>
                  </a>
                </Link>
              </div>
              {/* end tools */}
            </div>
            {/* end header-sections */}
          </div>
          {/* end header-wrapper */}
        </div>
        {/* end header-inner */}
      </header>
    </Fragment>
  );
};

export default Header;
