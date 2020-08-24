import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from './../../components/Layout';

const Sponzori = () => {
  return (
    <Layout title='Podporují nás'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Podporují nás' />
          <div className='sponzoriCont'>
            <div style={{ textAlign: 'center' }}>
              <a href='http://www.brno-lisen.cz/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='https://res.cloudinary.com/tomastuser/image/upload/v1587221222/Brno-L%C3%AD%C5%A1e%C5%88_znak.svg_bdbwus.png'
                />
                <h3>Brno-Líšeň</h3>
              </a>
            </div>
            <div>
              <a href='https://www.brno.cz/'>
                <img
                  style={{ height: '5vw', padding: '2vh' }}
                  alt=''
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Logo_Brno.svg'
                />
              </a>
            </div>
            <div>
              <a href='https://foundation.avast.com/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='http://www.lesnimarianka.cz/Data/Sites/1/media/avastlogo.png'
                />
              </a>
            </div>
            <div>
              <a href='http://www.lidl.cz/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='http://www.lesnikavyl.cz/images/partneri/lidl.png'
                />
              </a>
            </div>
            <div>
              <a href='https://www.kr-jihomoravsky.cz/'>
                <img
                  style={{ height: '5vw', padding: '1vh' }}
                  alt=''
                  src='http://www.lesnikavyl.cz/Uploads/PR/loga/logo-JMK.jpg'
                />
              </a>
            </div>
            <div>
              <a href='http://www.sita.cz/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='http://www.lesnikavyl.cz/images/partneri/SUEZ.jpg'
                />
              </a>
            </div>
            <div>
              <a href='http://www.nalontu.cz/'>
                <img
                  style={{ height: '5vw', padding: '2vh' }}
                  alt=''
                  src='http://www.lesnikavyl.cz/images/partneri/na_lontu.jpg'
                />
              </a>
            </div>
          </div>
          <p>
            Děkujeme všem partnerům a sponzorům za jejich příspěvky a
            vstřícnost. Hluboké poděkování patří také všem rodičům, přátelům a
            příznivcům za jejich obětavou spolupráci při našich aktivitách.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Sponzori;
