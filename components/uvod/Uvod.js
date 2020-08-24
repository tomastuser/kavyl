import React from 'react';

const Uvod = () => {
  return (
    <div className='uvodStredCont'>
      <div className='uvodSliderCont'>
        <div className='uvodSlider'>
          <img
            alt='Kavyl Uvod'
            src='https://res.cloudinary.com/tomastuser/image/upload/v1587555050/xypg4yxk6drpn00dysd9.jpg'
          />
        </div>
      </div>

      <div className='vitejteCont'>
        <div className='vitejte'>
          Spolek, který vrací dětem přírodu a dětství na lukách a v lesích
        </div>
      </div>
      <div
        className='sipka'
        onClick={() => window.scrollTo(0, window.innerHeight * 0.9)}
        onKeyDown={() => window.scrollTo(0, window.innerHeight * 0.9)}
        role='button'
        tabIndex={0}
      >
        ↓
      </div>
    </div>
  );
};

export default Uvod;
