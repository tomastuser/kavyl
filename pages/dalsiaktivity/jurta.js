import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from './../../components/Layout';

const Jurta = () => {
  return (
    <Layout title='Jurta'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Pronájem Jurty' />
          <p> Je možné pronajmout si Jurtu.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Jurta;
