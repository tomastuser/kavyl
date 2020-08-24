import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer2 = () => {
  const d = new Date();
  return (
    <>
      <div className='Footer2'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            className='up'
            type='button'
            onClick={() => window.scrollTo(0, 0)}
            onKeyDown={() => window.scrollTo(0, 0)}
          >
            <h3>
              <FontAwesomeIcon icon={faArrowUp} size='1x' fixedWidth />
            </h3>
          </button>
        </div>
      </div>
      <div className='copyright'>
        <h3>
          <FontAwesomeIcon icon={faCopyright} size='1x' fixedWidth />
          &nbsp;Kavyl z.s.
          {d.getFullYear()}
        </h3>
      </div>
    </>
  );
};

export default Footer2;
