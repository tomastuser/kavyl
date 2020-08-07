import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const Aktualita = ({ aktualita }) => {
  const router = useRouter();
  return (
    <div className='mainOstatni'>
      <div className='aktualityContainer'>
        <div className='aktualita'>
          <h2 className='aktualitaNadpis'>{aktualita.Nadpis}</h2>
          <div className='aktualitaTelo'>
            <div className='aktualitaImg'>
              {aktualita.Image && (
                <Link href={`/images/${aktualita.id}`}>
                  <img src={aktualita.Image.url} alt={aktualita.Nadpis} />
                </Link>
              )}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: aktualita.Text }}
              className='aktualitaText'
            ></div>
          </div>
          <div
            className='aktualitaButton button'
            onClick={() => router.push('/onas/aktuality')}
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

export default Aktualita;
