import React, { Fragment } from "react";
import Navigation from "./Navigation";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <Fragment>
      <header className="site-header header-default header-color-default header-has-bg">
        <div className="header-inner">
          <div className="header-wrapper grid-container">
            <div className="header-sections grid-x align-middle">
              <Navigation />
              <div className="site-branding cell shrink text-center">
                <a href="index.html" rel="home">
                  <img
                    className="site-logo"
                    src="http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg"
                    title="The Original"
                    alt="BAFK"
                  />
                  <img
                    className="site-logo-light"
                    src="http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg"
                    title="The Original"
                    alt="BAFK"
                  />
                  <img
                    className="sticky-logo"
                    src="http://bafkoriginal.com/theme/assets/img/logo/barberry-logo.svg"
                    title="The Original"
                    alt="BAFK"
                  />
                </a>
              </div>
              <RightHeader />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
