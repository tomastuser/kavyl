import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFrog,
  faKiwiBird,
  faCat,
  faFish,
  faCrow,
} from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
  const [randomAnimal] = useState(Math.floor(Math.random() * 5 + 1));
  const zvirata = [faFrog, faCat, faFish, faKiwiBird, faCrow];

  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>404 - STRÁNKA NENALEZENA</h1>
        <div>
          <h1>
            {zvirata.map(
              (iconName, index) =>
                index === randomAnimal && (
                  <FontAwesomeIcon
                    key={iconName}
                    icon={iconName}
                    size='3x'
                    fixedWidth
                  />
                )
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
