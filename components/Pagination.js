import React from 'react';
import Link from 'next/link';

const Pagination = ({ postsPerPage, totalPosts, paginate, strana }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
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
              <a className='pageLink' onClick={() => paginate(strana - 1)}>
                &laquo;
              </a>
            </Link>
          )}
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className='pageItem'>
            <Link href={`/onas/aktuality?strana=${number}`}>
              <a
                className={
                  number === strana ? 'pageLink pageLinkActive' : 'pageLink'
                }
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </Link>
          </li>
        ))}
        <li className='pageItem'>
          {strana === pageNumbers.length ? (
            <span className='pageLink pageLinkDisabled'>&raquo;</span>
          ) : (
            <Link href={`/onas/aktuality?strana=${strana + 1}`}>
              <a className='pageLink' onClick={() => paginate(strana + 1)}>
                &raquo;
              </a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
