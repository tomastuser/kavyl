import React from 'react';
import Zaklad from '../../components/Zaklad';

const Informace = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Praktické informace' />
        <p>
          <strong>Jak si program objednat?</strong>
        </p>
        <p>
          1. Vyplňte <strong>nezávaznou přihlášku</strong>{' '}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSd812mIpEF81daVAxbviXo-Bv0x87qqm_jPZWXluASwxTKoNw/viewform'>
            zde
          </a>
          ,&nbsp;nebo nás kontaktujte prostřednictvím e-mailu{' '}
          <strong>evvo@lesnikavyl.cz</strong>.&nbsp;
        </p>
        <p>Nahlaste nám prosím:</p>
        <ul>
          <li>název požadovaného programu</li>
          <li>počet dětí a jejich věk</li>
          <li>adresu školy</li>
          <li>jméno, telefon a e-mail kontaktní osoby</li>
        </ul>
        <p>2. Ozveme se vám a vybereme oboustranně vyhovující termín.</p>
        <p>3. Do 14 dnů zašleme e-mail s potvrzením objednávky.</p>
        <p>Poplatek uhradíte na místě před zahájením programu.</p>
        <p>Storno:</p>
        <p>
          Pokud se neomluvíte z vybraného programu nejpozději&nbsp;1 pracovní
          den předem do 15 h, bude vám účtován stornopoplatek ve výši 1000 Kč.
        </p>
        <p>Odpovědnost:</p>
        <p>
          Za žáky nese odpovědnost doprovázející pedagog. Lektor zodpovídá
          výhradně za kvalitu a obsah programu.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>Jak se k nám dostanete?</strong>
        </p>
        <p>
          Vlastním autobusem - vedle hájovny je možnost děti vyložit a naložit.
        </p>
        <p>Veřejnou dopravou</p>
        <ul>
          <li>
            z Brna linkovým autobusem č. 701 na zastávku Pozořice, Jezera,
            Vodojem - 3 minuty chůze směr Hostěnice
          </li>
          <li>
            z Brna linkovým autobusem č. 702 na zastávku Pozořice, Jezera - 15
            minut chůze směr Hostěnice
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <strong>Co s sebou?</strong>
        </p>
        <p>
          Naše programy probíhají na zahradě a v okolním lese. Doporučujeme
          dětem vhodné oblečení a obuv pro pohyb v přírodě. V jarním a letním
          období se hodí také repelent a pokrývka hlavy. Vzhledem k délce
          programu doporučujeme vzít svačinu.
        </p>
        <p>Za nepříznivého počasí bude program probíhat v jurtě a týpí.</p>
      </div>
    </div>
  );
};

export default Informace;
