import React from 'react';
import Head from 'next/head';
import { PropTypes } from 'prop-types';

import '../app.css';

import Nav from './Nav';
import Footer from './Footer';
import Footer2 from './Footer2';
import ScrollToTop from '../components/ScrollToTop';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Kavyl</title>
      </Head>
      <ScrollToTop />
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
      <Footer2 />
    </div>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = { pageProps: '' };

export default MyApp;
