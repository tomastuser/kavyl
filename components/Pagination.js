import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Pagination = ({ postsPerPage, totalPosts, paginate, strana }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className='pageItem'>
          {strana === 1 ? (
            <span className='pageLink pageLinkDisabled'>&laquo;</span>
          ) : (
            <Link href={`/onas/aktuality?strana=${strana - 1}`}>
              <button
                type='button'
                className='pageLink'
                onClick={() => paginate(strana - 1)}
              >
                &laquo;
              </button>
            </Link>
          )}
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className='pageItem'>
            <Link href={`/onas/aktuality?strana=${number}`}>
              <button
                type='button'
                className={
                  number === strana ? 'pageLink pageLinkActive' : 'pageLink'
                }
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </Link>
          </li>
        ))}
        <li className='pageItem'>
          {strana === pageNumbers.length ? (
            <span className='pageLink pageLinkDisabled'>&raquo;</span>
          ) : (
            <Link href={`/onas/aktuality?strana=${strana + 1}`}>
              <button
                type='button'
                className='pageLink'
                onClick={() => paginate(strana + 1)}
              >
                &raquo;
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  strana: PropTypes.number.isRequired,
};

export default Pagination;
