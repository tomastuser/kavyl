import React from 'react';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

import ClenTymu from '../../components/Tym/ClenTymu';

function NasiLide({ clenove }) {
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(clenove).sort((a, b) => {
      return b.id - a.id;
    });
  };
  return (
    <div className='mainOstatni'>
      <div className='nasTym'>
        <h1>Náš tým</h1>
        <div className='tymContainer'>
          <div className='tym'>
            {serazeniOdNejvyssiho()
              .reverse()
              .map((clen) => (
                <ClenTymu key={clen.id} clen={clen} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://marianka.herokuapp.com/people');
  const clenove = await res.json();

  return { props: { clenove } };
}

NasiLide.propTypes = {
  clenove: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NasiLide;
