import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

const Foto = ({ aktualita }) => {
  const router = useRouter();
  return (
    <div className='mainOstatni'>
      <div className='fotoContainer'>
        <div className='foto'>
          {aktualita.Image ? (
            <img
              src={aktualita.Image.url}
              alt={aktualita.Nadpis}
              onClick={() => router.push(`/onas/aktuality/${aktualita.id}`)}
              onKeyDown={() => router.push(`/onas/aktuality/${aktualita.id}`)}
              role='presentation'
            />
          ) : (
            <h1>Foto neexistuje</h1>
          )}
          <div
            className='button'
            onClick={() => router.push(`/onas/aktuality/${aktualita.id}`)}
            onKeyDown={() => router.push(`/onas/aktuality/${aktualita.id}`)}
            role='button'
            tabIndex={0}
          >
            Zpět
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://marianka.herokuapp.com/articles/${id}`);
  const aktualita = await res.json();
  return { props: { aktualita } };
}

Foto.propTypes = {
  aktualita: PropTypes.shape({
    Nadpis: PropTypes.string,
    Text: PropTypes.string,
    id: PropTypes.number,
    Image: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
};

export default Foto;
