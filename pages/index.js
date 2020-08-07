import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AktualitaZastupce from '../components/AktualitaZastupce';
import OdrazkyUvod from '../components/uvod/OdrazkyUvod';
import Andel from '../components/uvod/Andel';

const App = ({ aktuality }) => {
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort(function (a, b) {
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
            ></img>
          </div>
          <div className='uvodAktuality'>
            <Andel />

            <h1>Nejnovější aktuality</h1>
            <div className='aktuality'>
              {serazeniOdNejvyssiho()
                .slice(0, 3)
                .map((aktualita) => (
                  <AktualitaZastupce key={aktualita.id} aktualita={aktualita} />
                ))}
            </div>
            <Link href='/onas/aktuality'>
              <a className='button'>Všechny příspěvky</a>
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
  return {
    props: {
      aktuality,
    },
  };
}
export default App;
