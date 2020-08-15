/* eslint-disable react/no-danger */
import React from 'react';
import { PropTypes } from 'prop-types';

const ClenTymu = ({ clen }) => (
  <div className='clenTymu'>
    <img src={clen.Image.url} alt={clen.Jmeno} />
    <h1>{clen.Jmeno}</h1>
    <h2>{clen.Pozice}</h2>
    <div className='clenTymuText'>
      <div dangerouslySetInnerHTML={{ __html: clen.Popis }} />
    </div>
  </div>
);

ClenTymu.propTypes = {
  clen: PropTypes.shape({
    Jmeno: PropTypes.string,
    Pozice: PropTypes.string,
    Popis: PropTypes.string,
    Image: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
};

export default ClenTymu;
