import React from 'react';
import Zaklad from '../../components/Zaklad';

function KdoJsme() {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Kdo jsme' />
        <p>
          Spolek Kavyl z.s. je členem Asociace lesních mateřských škol.
          Provozujeme Dětský lesní klub Stromík v Pozořicích (od roku 2010) a
          Lesní mateřskou školu Mariánku (od roku 2012) v Brně-Líšni. Vedle toho
          podporujeme prorodinné aktivity, do nichž se mohou zapojit všichni,
          kdo mají chuť se svými dětmi, rodiči či prarodiči něco podnikat.
          Pořádáme přednášky, hudební či divadelní představení, vedeme
          volnočasové kroužky, slavíme místní tradice. Nabízíme také
          environmentální výukové programy pro školy. Naše činnost je pestrá
          díky aktivní spolupráci s rodiči dětí, příznivci lesní pedagogiky,
          dalšími spolky a samosprávou v Mikroregionu Roketnice a v Líšni. Toto
          je způsob práce, který je pro nás smysluplný a máme radost, že se
          našich akcí účastní sousedé i přespolní.
        </p>
      </div>
    </div>
  );
}

export default KdoJsme;
