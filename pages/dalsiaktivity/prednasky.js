import React from 'react';
import Zaklad from '../../components/Zaklad';
import FotoCont from '../../components/FotoCont';
import Layout from './../../components/Layout';

const Prednasky = () => {
  return (
    <Layout title='Přednášky a semináře'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Přednášky a semináře' />
          <h2>Přednášky na téma rodina, děti, výchova</h2>
          <ul>
            <li>
              přednášky Aleny Lalákové, speciální pedagožky a rodinné terapeutky
            </li>
            <li>
              přednášky pořádané ve spolupráci s Asociací lesních mateřských
              škol
            </li>
            <li>
              Bubnohrátky se Soňou Štoudkovou – ve spolupráci s Knihovnou Jiřího
              Mahena pořádáme seminář muzikoterapie
            </li>
            <li>Kurzy storytellingu pod vedením Martina Haka</li>
            <li>zdravotnický seminář pro průvodce klubů</li>
          </ul>
          <FotoCont />
          <h2>Semináře a přednášky na téma ekologie, pěstování, příroda</h2>
          <ul>
            <li>Bylinky na živo – bylinkový zážitkový seminář</li>
            <li>Seminář o starých odrůdách stromů</li>
          </ul>
          <h2>Řemeslné kurzy</h2>
          <ul>
            <li>Vyrob si svůj buben</li>
            <li>Malé řezbářské sympozium</li>
            <li>Keramika</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Prednasky;
