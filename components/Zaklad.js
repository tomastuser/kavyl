import React from 'react';
import Kytky from './Kytky';
import Kytky2 from './Kytky2';

const Zaklad = ({ nazev }) => {
  return (
    <div>
      <h1 className='nazev'>{nazev}</h1>
      <img
        className='caraNadpis'
        alt='caraNadpis'
        src='https://res.cloudinary.com/tomastuser/image/upload/v1594799803/cara_nadpis_wtzq3b.png'
      />
      {Math.floor(Math.random() * 2) === 0 ? <Kytky /> : <Kytky2 />}
    </div>
  );
};

export default Zaklad;
