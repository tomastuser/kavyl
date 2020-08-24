import React, { useState } from 'react';

const FotoRandom = () => {
  const [fotoURLs] = useState([
    'https://res.cloudinary.com/tomastuser/image/upload/v1597492196/IMG_7337_bfy9ew.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1597492196/DSC_0103_vuw73u.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1597492196/st%C5%99eda3_ojiymd.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1597492196/DSC_1654_n4ojch.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1597492196/IMG_5134_lltt9l.jpg',
    'http://www.lesnikavyl.cz/Uploads/krouzky_text.JPG',
    'https://res.cloudinary.com/tomastuser/image/upload/v1587555069/pqnkudhjczxcy0mf9fxa.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1587570666/p46ydhhi7tzf1gqgmqae.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1587555050/xypg4yxk6drpn00dysd9.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1587555043/obxzsaaqzz6u9qj3yma5.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1587555031/lhk1iramcsrxzdl5uf9h.jpg',
    'https://res.cloudinary.com/tomastuser/image/upload/v1585862345/f72utb49qpeawwyrzckf.jpg',
  ]);

  const [randomFoto] = useState(Math.floor(Math.random() * fotoURLs.length));

  return (
    <div className='fotoRandom'>
      <div className='fotoRandomImg'>
        {fotoURLs.map(
          (url, index) =>
            index === randomFoto && <img alt={randomFoto} src={url} />
        )}
      </div>
    </div>
  );
};

export default FotoRandom;
