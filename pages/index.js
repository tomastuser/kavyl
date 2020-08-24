import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PropTypes } from 'prop-types';

import AktualitaZastupce from '../components/AktualitaZastupce';
import OdrazkyUvod from '../components/uvod/OdrazkyUvod';
import Uvod from '../components/uvod/Uvod';

const App = ({ aktuality }) => {
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a, b) => {
      return a - b;
    });
  };

  return (
    <>
      <Head>
        <title>Kavyl</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='App'>
        <div className='Uvod'>
          <div className='pozadiFixed'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1587637533/aezswjs5y9sb8bds5hyhHD_do5byd.jpg'
              alt=''
            />
          </div>
          <div className='uvodAktuality'>
            <Uvod />

            <h1>Nejnovější aktuality</h1>
            <div className='aktuality'>
              {serazeniOdNejvyssiho()
                .slice(0, 3)
                .map((aktualita, index) => (
                  <AktualitaZastupce
                    key={aktualita.id}
                    aktualita={aktualita}
                    pozadi={`aktualitaPozadi${index + 1}`}
                  />
                ))}
            </div>
            <Link href='/onas/aktuality'>
              <button
                type='button'
                className='button'
                style={{
                  width: '15%',
                  marginBottom: '0',
                  marginTop: '0',
                  minWidth: '260px',
                }}
              >
                Všechny příspěvky
              </button>
            </Link>
          </div>
          <div className='pozadiPrazdneContainer'>
            <div className='pozadiPrazdne'>
              <OdrazkyUvod />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://marianka.herokuapp.com/articles/');
  const aktuality = await res.json();
  return { props: { aktuality } };
}

App.propTypes = { aktuality: PropTypes.arrayOf(PropTypes.object).isRequired };

export default App;
