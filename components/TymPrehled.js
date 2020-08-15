import React from 'react';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

import ClenTymu from './Tym/ClenTymu';

const Tym = ({ clenove }) => {
  const serazeniOdNejvyssiho = () => {
    return [].slice.call(clenove).sort((a, b) => {
      return b.id - a.id;
    });
  };
  return (
    <div className='tymContainer'>
      <div className='tym'>
        {serazeniOdNejvyssiho()
          .reverse()
          .map((clen) => (
            <ClenTymu key={clen.id} clen={clen} />
          ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://marianka.herokuapp.com/people');
  const clenove = await res.json();

  return { props: { clenove } };
}

Tym.propTypes = { clenove: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tym;
