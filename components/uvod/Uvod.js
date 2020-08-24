import React, { useState, useEffect } from 'react';

const Uvod = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      counter < 1 ? setCounter(counter + 1) : setCounter(0);
    }, 6000);
    return () => clearInterval(timer);
  });
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
        <div className={`vitejte ${counter === 0 ? 'active' : 'disabled'}`}>
          Vítejte
          <br />
          na&nbsp; stránkách&nbsp; Kavylu!
        </div>
        <div className={`vitejte ${counter === 1 ? 'active' : 'disabled'}`}>
          SPOLKU,
          <br />
          KTERÝ &nbsp;VRACÍ &nbsp;DĚTEM&nbsp; PŘÍRODU
          <br />
          A&nbsp; DĚTSTVÍ&nbsp; NA &nbsp;LUKÁCH A&nbsp;&nbsp; V &nbsp;LESÍCH
        </div>
      </div>
      <div
        className='sipka'
        onClick={() => window.scrollTo(0, window.innerHeight * 0.9)}
        onKeyDown={() => window.scrollTo(0, window.innerHeight * 0.9)}
        role='button'
        tabIndex={0}
      >
        <img alt='sipka' src='/sipky.png' />
      </div>
    </div>
  );
};

export default Uvod;
