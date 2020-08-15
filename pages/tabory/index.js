import React from 'react';
import Zaklad from '../../components/Zaklad';
import FotoRandom from '../../components/FotoRandom';

const Tabory = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Tábory' />
        <p>
          Každoročně pořádáme prakticky po celé letní prázdniny příměstské
          tábory v zázemí Stromíku v Pozořicích a Mariánky v Líšni. Tábory jsou
          určeny zejména pro děti ve věku 3 - 7 let, které ještě nechodí do
          školy, vybrané turnusy jsou také pro děti 1. stupně ZŠ. Máte-li děti
          různého věku, můžete je ve vybraných termínech příhlásit společně,
          protože otevíráme dvě paralelní skupiny s vlastním programem. Provozní
          doba tábora je vždy od pondělí do pátku od 8 do 16 h.
        </p>
        <h3>Tábory 2020</h3>
        <p>
          Podrobné informace k letošním táborům najdete
          <a href='https://docs.google.com/document/d/1e0RPhQey1kTwfIeXcUfXJs1w5Ax5ULLBlLWi_uKhGMs/edit?ts=5e208598'>
            {' '}
            zde.
          </a>
          <br />
          Přihlašovat se můžete online -
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSclS51v02DS8Uo3mcNGtgO6i7mWdoe-CidNHxmzBqULWIJYkw/viewform'>
            {' '}
            PŘIHLÁŠKA.
          </a>
        </p>
        <FotoRandom />
      </div>
    </div>
  );
};

export default Tabory;
