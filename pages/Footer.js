import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  const d = new Date();

  return (
    <div className='Footer'>
      <div className='FooterD'>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1585867492/qdc5glp7boyre6m2sd6p.png'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/alms_logo_transparentni.gif'
              alt=''
            />
          </a>
        </div>
        <div className='footerInfo'>
          <ul>
            <li>
              <h3>
                <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />{' '}
                {'  '}
                info@lesnikavyl.cz
              </h3>
            </li>
            <li>
              <h3>
                <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />{' '}
                Hostěnická 626, Pozořice
              </h3>
            </li>
            <li>
              <h3>
                <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth />
                777 145 343
              </h3>
            </li>
            <li>
              <h3>
                <a
                  style={{ color: 'black' }}
                  href='https://www.facebook.com/spolekKavyl/'
                >
                  <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />{' '}
                  spolekKavyl
                </a>
              </h3>
            </li>
          </ul>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/darujme_logo.png'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img
              src='http://lesnikvitek.cz/Data/Sites/1/media/uvodni/2017/givt_box_211_211.jpg'
              alt=''
            />
          </a>
        </div>
      </div>
      <div className='FooterM'>
        <div className='footerInfo'>
          <ul>
            <li>
              <h3>
                <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />{' '}
                {'  '}
                info@lesnikavyl.cz
              </h3>
            </li>
            <li>
              <h3>
                <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />{' '}
                Hostěnická 626, Pozořice
              </h3>
            </li>
            <li>
              <h3>
                <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth />
                777 145 343
              </h3>
            </li>
            <li>
              <h3>
                <a
                  style={{ color: 'black' }}
                  href='https://www.facebook.com/spolekKavyl/'
                >
                  <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />{' '}
                  spolekKavyl
                </a>
              </h3>
            </li>
          </ul>
        </div>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1585867492/qdc5glp7boyre6m2sd6p.png'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/alms_logo_transparentni.gif'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/darujme_logo.png'
              alt=''
            />
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img
              src='http://lesnikvitek.cz/Data/Sites/1/media/uvodni/2017/givt_box_211_211.jpg'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
