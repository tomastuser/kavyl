import React from 'react';
import Link from 'next/link';

const AktualitaZastupce = ({ aktualita }) => {
  return (
    <div className='aktualitaZastupce'>
      <Link href={`/aktuality/${aktualita.id}`}>
        <a className='aktualitaZastupceNadpis'>
          <h4>{aktualita.Nadpis}</h4>
        </a>
      </Link>
      <div className='aktualitaZastupceText'>
        <div
          className='aktualitaZastupceTeloTextu'
          dangerouslySetInnerHTML={{
            __html:
              aktualita.Text.substr(0, 500) +
              (aktualita.Text.length > 500 ? ' ...' : ''),
          }}
        ></div>
      </div>
      <Link href={`/aktuality/${aktualita.id}`}>
        <a className='button'>Celý příspěvek</a>
      </Link>
    </div>
  );
};

export default AktualitaZastupce;
