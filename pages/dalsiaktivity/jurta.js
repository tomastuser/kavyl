import React from 'react';
import Zaklad from '../../components/Zaklad';

const Jurta = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <Zaklad nazev='Pronájem Jurty' />
        <p> Je možné pronajmout si Jurtu.</p>
      </div>
    </div>
  );
};

export default Jurta;
