import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Pagination from '../../../components/Pagination';
import AktualitaZastupce from '../../../components/AktualitaZastupce';

const Aktuality = ({ aktuality, strana }) => {
  const [postsPerPage] = useState(6);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort(function (a, b) {
      return b.id - a.id;
    });
  };

  const indexOfLastPost = strana * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const aktualityZde = serazeniOdNejvyssiho().slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => (strana = pageNumber);
  return (
    <div className='mainOstatni'>
      <div className='aktualityContainer'>
        <h1>Aktuality</h1>
        <br />
        <div className='aktuality'>
          {aktualityZde.map((aktualita) => (
            <AktualitaZastupce key={aktualita.id} aktualita={aktualita} />
          ))}
        </div>
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={aktuality.length}
          paginate={paginate}
          strana={strana}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query: { strana = 1 } }) {
  const res = await fetch('https://marianka.herokuapp.com/articles');
  const aktuality = await res.json();

  return {
    props: {
      aktuality,
      strana: +strana,
    },
  };
}

export default Aktuality;
