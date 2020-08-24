import React from 'react';
import Head from 'next/head';
import { PropTypes } from 'prop-types';

import Nav from './Nav';
import Footer from './Footer';
import Footer2 from './Footer2';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children, title = 'Kavyl z.s.' }) {
  return (
    <>
      <Head>
        <title>{`Kavyl z.s. | Lesní školky a další aktivity v Brně a Pozořicích - ${title}`}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='keywords'
          content='lesní školka, lesní školka Brno, lesní mateřská škola, lesní klub'
        />
        <meta
          name='description'
          content='Kavyl zastřešuje lesní školky, lesní kluby a další aktivity v Brně-Líšni a Pozořicích'
        />
      </Head>
      <header>
        <ScrollToTop />
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
        <Footer2 />
      </footer>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
