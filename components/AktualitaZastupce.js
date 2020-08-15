/* eslint-disable operator-linebreak */
import React from 'react';
import Link from 'next/link';
import { PropTypes } from 'prop-types';

const AktualitaZastupce = ({ aktualita }) => (
  <div className='aktualitaZastupce'>
    <Link href={`/aktuality/${aktualita.id}`}>
      <h4 className='aktualitaZastupceNadpis'>{aktualita.Nadpis}</h4>
    </Link>
    <div className='aktualitaZastupceText'>
      <div
        className='aktualitaZastupceTeloTextu'
        dangerouslySetInnerHTML={{
          __html:
            aktualita.Text.substr(0, 500) +
            (aktualita.Text.length > 500 ? ' ...' : ''),
        }}
      />
    </div>
    <Link href={`/onas/aktuality/${aktualita.id}`}>
      <button type='button' className='button'>
        Celý příspěvek
      </button>
    </Link>
  </div>
);

AktualitaZastupce.propTypes = {
  aktualita: PropTypes.shape({
    id: PropTypes.number,
    Text: PropTypes.string,
    Nadpis: PropTypes.string,
  }).isRequired,
};

export default AktualitaZastupce;
