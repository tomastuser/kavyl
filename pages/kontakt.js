import React from 'react';
import Zaklad from '../components/Zaklad';

function Kontakt() {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Kontakt' />
        <div className='kontaktContD'>
          <div className='kontaktA'>
            <h3>Kde nás najdete</h3>
            <p>Hostěnická 626, Pozořice, 664 07</p>
            <div className='mapouterD'>
              <div className='gmap_canvas'>
                <iframe
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?q=Host%C4%9Bnick%C3%A1%20626&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                  width={320}
                  height={320}
                  frameBorder={0}
                  title='gmap_canvas'
                />
                <a href='https://putlocker-is.org'>putlocker</a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                }}
              />
            </div>
          </div>
          <div className='kontaktB'>
            <h3>Kavyl z.s.</h3>
            <ul>
              <li>Sídlo:</li>
              <li>Viničné Šumice č. p. 137, 664 06 </li>
              <br />
              <li>IČ: 229 09 320</li>
              <br />
              <li>Číslo účtu: 2601593939/2010</li>
              <br />
              <li>Datová schránka: itb74qd</li>
            </ul>
            <h3>Klára Krchňavá</h3>
            <ul>
              <li>tel.: 777 145 343</li>
              <li>e-mail: klara.krchnava@lesnikavyl.cz</li>
            </ul>
            <h3>Obecné informace:</h3>
            <p>e-mail: info@lesnikavyl.cz</p>
            <h3>Enviroprogramy:</h3>
            <p>e-mail: evvo@lesnikavyl.cz</p>
            <h3>dotace, finance:</h3>
            <p>e-mail: finance@lesnikavyl.cz</p>
            <h3>média:</h3>
            <p>e-mail: pr@lesnikavyl.cz</p>
          </div>
        </div>

        <div className='kontaktContM'>
          <div className='kontaktA'>
            <h3>Kde nás najdete</h3>
            <p>Hostěnická 626, Pozořice, 664 07</p>
            <div className='mapouterM'>
              <div className='gmap_canvas'>
                <iframe
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?q=Host%C4%9Bnick%C3%A1%20626&t=&z=13&ie=UTF8&iwloc=&output=embed'
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                  width={320}
                  height={320}
                  frameBorder={0}
                  title='gmap_canvas'
                />
                <a href='https://putlocker-is.org'>putlocker</a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                }}
              />
            </div>
          </div>
          <div className='kontaktB'>
            <h3>Kavyl z.s.</h3>
            <p>
              Sídlo:
              <br />
              Viničné Šumice č. p. 137, 664 06
              <br />
              IČ: 229 09 320
              <br />
              Číslo účtu: 2601593939/2010
              <br />
              Datová schránka: itb74qd
            </p>
            <h3>Klára Krchňavá</h3>
            <p>
              tel.: 604 536 796
              <br />
              e-mail: klara.krchnava@lesnikavyl.cz
            </p>
            <h3>Obecné informace:</h3>
            <p>e-mail: info@lesnikavyl.cz</p>
            <h3>Enviroprogramy:</h3>
            <p>e-mail: evvo@lesnikavyl.cz</p>
            <h3>dotace, finance:</h3>
            <p>e-mail: finance@lesnikavyl.cz</p>
            <h3>média:</h3>
            <p>e-mail: pr@lesnikavyl.cz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
