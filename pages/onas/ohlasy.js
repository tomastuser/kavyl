import React from 'react';
import Zaklad from '../../components/Zaklad';

const Ohlasy = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Ohlasy' />
        <h3>Stromík v ČT</h3>
        <p>
          Příspěvek o životě v lesních školkách v České televizi. Můžete si
          přehrát
          <a href='https://www.ceskatelevize.cz/porady/10122427178-udalosti-v-regionech-brno/319281381991218-udalosti-v-regionech/video/739957?fbclid=IwAR0g6pTD7oVg3Nab54-GOpD6hVJk-SHmFmL2df4uX75jbw-o_wFIirsTGEM'>
            {' '}
            zde.
          </a>
        </p>
        <h3>Povídání maminky o Stromíku</h3>
        <p>
          <a href='https://lesycr.cz/casopis-clanek/lesni-skolce-nevyrustaji-stromky/'>
            V lese nevyrůstají pouze stromky.{' '}
          </a>
          Povídání maminky o životě ve Stromíku, které vyšlo v časopise Lesů ČR.
        </p>
        <h3>Masopust</h3>
        <p>
          <a href='http://www.brno-lisen.cz/vesele-hratky-lesnich-skritku-kvitka-a-marianky/t5409'>
            Reportáž z masopustu
          </a>{' '}
          Kvítku i Mariánky.
        </p>
        <h3>Stromík v ČT</h3>
        <p>
          Video o DLK Stromík v rámci pořadu ČT Týden v regionech - sekvence
          <a href='http://www.ceskatelevize.cz/ivysilani/1181680258-tyden-v-regionech-brno/316281381890227-tyden-v-regionech/obsah/455671-tri-minuty-z'>
            {' '}
            o Stromíku je na 5:53 min.
          </a>
        </p>
        <h3>Jak se žije v lesní školce v Pozořicích</h3>
        <p>
          Jak se žije v lesní školce v létě v zimě, jak se v Pozořicích společně
          slaví Ostatky, o tom všem se dočtete v Pozořickém zpravodaji.
        </p>
      </div>
    </div>
  );
};

export default Ohlasy;
