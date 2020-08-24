import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { PropTypes } from 'prop-types';

import Pagination from '../../../components/Pagination';
import AktualitaZastupce from '../../../components/AktualitaZastupce';

const Aktuality = ({ aktuality, strana }) => {
  const [stranaB, setstranaB] = useState(strana);
  const [postsPerPage] = useState(6);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a, b) => {
      return b.id - a.id;
    });
  };

  const indexOfLastPost = stranaB * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const aktualityZde = serazeniOdNejvyssiho().slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setstranaB(pageNumber);
  return (
    <div className='mainOstatni'>
      <div className='aktualityContainer'>
        <h1>Aktuality</h1>
        <br />
        <div className='aktuality'>
          {aktualityZde.map((aktualita, index) => (
            <AktualitaZastupce
              key={aktualita.id}
              aktualita={aktualita}
              pozadi={`aktualitaPozadi${index + 1}`}
            />
          ))}
        </div>
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={aktuality.length}
          paginate={paginate}
          strana={stranaB}
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

Aktuality.propTypes = {
  strana: PropTypes.number.isRequired,
  aktuality: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Aktuality;
