import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


function Layout ( {children} ) {
    return(
        <Fragment>
            <Header />
                <Fragment>
                    { children }
                </Fragment>
            <Footer />
        </Fragment>
    )
}

export default Layout;