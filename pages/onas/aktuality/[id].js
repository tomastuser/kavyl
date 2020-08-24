import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';
import Layout from './../../../components/Layout';

const Aktualita = ({ aktualita }) => {
  const router = useRouter();
  return (
    <Layout title={aktualita.Nadpis}>
      <div className='mainOstatni'>
        <div className='aktualityContainer'>
          <div className='aktualita'>
            <h2 className='aktualitaNadpis'>{aktualita.Nadpis}</h2>
            <div className='aktualitaTelo'>
              <div className='aktualitaImg'>
                {aktualita.Image && (
                  <Link href={`/onas/aktuality/foto/${aktualita.id}`}>
                    <div type='button'>
                      <img src={aktualita.Image.url} alt={aktualita.Nadpis} />
                    </div>
                  </Link>
                )}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: aktualita.Text }}
                className='aktualitaText'
              />
            </div>
            <div
              className='aktualitaButton button'
              onClick={() => router.push('/onas/aktuality')}
              onKeyDown={() => router.push('/onas/aktuality')}
              role='button'
              tabIndex={0}
            >
              Zpět
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://marianka.herokuapp.com/articles/${id}`);
  const aktualita = await res.json();
  return { props: { aktualita } };
}

Aktualita.propTypes = {
  aktualita: PropTypes.shape({
    Nadpis: PropTypes.string,
    Text: PropTypes.string,
    id: PropTypes.number,
    Image: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
};

export default Aktualita;
