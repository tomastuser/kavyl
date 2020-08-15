import React from 'react';
import Zaklad from '../../components/Zaklad';
import FotoRandom from '../../components/FotoRandom';

const Volnocas = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Volnočasové aktivity' />

        <p>
          Na tomto místě uvádíme pravidelně probíhající programy a příklady
          jednorázových akcí. Konkrétní informace a úplný výčet najdete na
          stránkách jednotlivých lesních školek. Přihlášky do aktuálních
          programů najdete také v sekci
          <a href='http://www.lesnikavyl.cz/'> Aktuálně.</a>
        </p>
        <FotoRandom />
        <h2>Environmentální kroužky pro děti</h2>
        <p>
          <strong>Zvoneček a Výletníček</strong>
        </p>
        <p>
          V zázemí obou lesních školek probíhají na jaře a na podzim jednou
          týdně environmentální kroužky pro děti do 3 let v doprovodu rodiče
          nebo jiné blízké osoby. Jsou zaměřeny na pravidelný pobyt dětí v
          přírodě.
        </p>
        <p>
          Od malička děti poznávají přírodu hravou formou − písničky, básničky,
          tvoření, hry, procházky. Celý program probíhá na prostorné zahradě a v
          blízkém lese pod vedením lektora z lesního klubu.
        </p>
        <p>
          Zvoneček (Mariánka) - aktuálně
          <a href='http://www.lesnikavyl.cz/aktualne/zvonecek_jaro_2020'>
            {' '}
            zde.
          </a>
        </p>
        <p>
          Výletníček (Stromík) - aktuálně
          <a href='http://www.stromik.cz/jarni-krouzek-vyletnicek'> zde.</a>
        </p>
        <p>
          <strong>Petrklíč</strong>
        </p>
        <p>
          Pro děti z 1. a 2. třídy&nbsp;ZŠ je určený přírodovědný kroužek
          Petrklíč. Pod vedením zkušené lektorky Aničky Slavíkové se děti
          seznamují&nbsp;s přírodou zblízka, přitom uplatňují&nbsp;svoje
          znalosti získané z vyučování nebo encyklopedií. Společně s kamarády
          poznávají&nbsp;líšeňskou faunu a flóru za využití speciálních pomůcek,
          vytvářejí artefakty z přírodnin a společně si hrají v přírodní
          zahradě.
        </p>
        <p>
          Aktuální informace a přihlašování&nbsp;
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSeV9raebPS7BcgGV7k5sDQVRpMjPuCt9vnXmo88TH9AjMarTA/viewform'>
            {' '}
            zde.
          </a>
        </p>
        <h2>
          <i>Tvoření v zimní přírodě</i>
        </h2>
        <p>&nbsp;</p>
        <p>
          Zimní varianta environmentálních kroužků pro děti ve věku 1 - 3 roky s
          doprovodem. Přenášení výtvarných technik do zimní přírody pod vedením
          výtvarnice a pedagožky.
        </p>
        <p>
          Aktuální informace -&nbsp;
          <a href='http://www.lesnikavyl.cz/aktualne/zimni_zvonecek'>Líšeň,</a>
          <a href='http://www.lesnikavyl.cz/aktualne/zimni_vyletnicek'>
            {' '}
            Pozořice.
          </a>
        </p>
        <h2>Keramika pro dospělé</h2>
        <p>
          Tvořivá&nbsp;setkání pro dospělé, kteří si chtějí užít to, co děti.
          Pod vedením výtvarníka a pedagoga Vítka Třísky v magickém prostředí
          jurty ve Stromíku.
        </p>
        <p>
          Aktuální informace
          <a href='http://www.lesnikavyl.cz/aktualne/keramika_pro_dospele'>
            {' '}
            zde.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Volnocas;
