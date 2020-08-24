import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from './../../components/Layout';

const DalsiAktivityUvod = () => {
  return (
    <Layout title='Další aktivity'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Další aktivity' />
          <p>
            Na tomto místě uvádíme pravidelně probíhající programy a příklady
            jednorázových akcí. Konkrétní informace a úplný výčet najdete v
            příslušných sekcích na našem webu a na stránkách DLK Stromík a LMŠ
            Mariánka.
            <br />
            <a href='www.stromik.cz'>www.stromik.cz</a>
            <br />
            <a href='www.lesnimarianka.cz'>www.lesnimarianka.cz</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DalsiAktivityUvod;
