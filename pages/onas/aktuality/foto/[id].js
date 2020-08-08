import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

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
            />
          ) : (
            <h1>Foto neexistuje</h1>
          )}
          <div
            className='button'
            onClick={() => router.push(`/onas/aktuality/${aktualita.id}`)}
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
  return {
    props: {
      aktualita,
    },
  };
}

export default Foto;
