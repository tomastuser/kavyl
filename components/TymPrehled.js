import React from 'react';
import fetch from 'isomorphic-unfetch';

import ClenTymu from './Tym/ClenTymu';

const Tym = ({ clenove }) => {
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(clenove).sort(function (a, b) {
      return b.id - a.id;
    });
  };
  clenove ? (
    <div className='tymContainer'>
      <div className='tym'>
        {serazeniOdNejvyssiho()
          .reverse()
          .map((clen) => (
            <ClenTymu key={clen.id} clen={clen} />
          ))}
      </div>
    </div>
  ) : (
    <div className='mainOstatni'>
      <div className='loading'>
        <h3>NAHRÁVÁM...</h3>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://marianka.herokuapp.com/people');
  const clenove = await res.json();

  return {
    props: {
      clenove,
    },
  };
}

export default Tym;
