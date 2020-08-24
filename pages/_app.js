import React from 'react';
import Head from 'next/head';
import { PropTypes } from 'prop-types';

import '../app.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Kavyl z.s.</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = { pageProps: '' };

export default MyApp;
