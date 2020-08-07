import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([
    {
      name: 'O nás',
      path: '/onas',
      id: '1',
      subNavLinks: [
        {
          name: 'Kdo jsme',
          path: '/onas/kdojsme',
        },
        {
          name: 'Aktuality',
          path: '/onas/aktuality',
        },
        {
          name: 'Naši lidé',
          path: '/onas/nasilide',
        },
        {
          name: 'Projekty',
          path: '/onas/projekty',
        },
        {
          name: 'Ohlasy',
          path: '/onas/ohlasy',
        },
        {
          name: 'Dokumenty',
          path: '/onas/dokumenty',
        },
        {
          name: 'Podporují nás',
          path: '/onas/sponzori',
        },
      ],
    },
    {
      name: 'Lesní školky',
      path: '/lesniskolky',
      id: '2',
      subNavLinks: [],
    },
    {
      name: 'Tábory',
      path: '/tabory',
      id: '3',
      subNavLinks: [],
    },
    {
      name: 'Enviro- programy',
      path: '/enviroprogramy',
      id: '4',
      subNavLinks: [
        {
          name: 'Aktuální nabídka',
          path: '/enviroprogramy/nabidka',
        },
        {
          name: 'Praktické informace',
          path: '/enviroprogramy/informace',
        },
      ],
    },
    {
      name: 'Další aktivity',
      path: '/dalsiaktivity',
      id: '5',
      subNavLinks: [
        {
          name: 'Přednášky a semináře',
          path: '/dalsiaktivity/prednasky',
        },
        {
          name: 'Akce pro veřejnost',
          path: '/dalsiaktivity/akce',
        },
        {
          name: 'Volno- časové aktivity',
          path: '/dalsiaktivity/volnocas',
        },
        {
          name: 'Pronájem jurty',
          path: '/dalsiaktivity/jurta',
        },
      ],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      id: '6',
      subNavLinks: [],
    },
  ]);

  const [windowWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  }, [windowWidth]);

  const [subNavLinksOpen, setSubNavLinksOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const subNavOpeningHandler = (e) => {
    const subs = [...subNavLinksOpen];
    const currentId = e.currentTarget.id - 1;
    if (windowWidth < 768) {
      subs[currentId] = !subs[currentId];
    }
    setSubNavLinksOpen(subs);
  };
  return (
    <>
      <div className='nav'>
        <div
          className={navOpen ? 'sideNavSpacerActive' : 'sideNavSpacer'}
          onClick={() => setNavOpen((navOpen) => (navOpen = false))}
        ></div>
        <div className='spacer'></div>
        <div onClick={() => setNavOpen((navOpen) => (navOpen = false))}>
          <div className='logo'>
            <div className='logoCont'>
              <Link href='/'>
                <img
                  src='https://res.cloudinary.com/tomastuser/image/upload/v1594715441/kavyl-logo-bezpozadi_vaeplo.png'
                  alt=''
                ></img>
              </Link>
            </div>
            <div className='logoText'>
              <Link href='/'>
                <a>
                  <h1>Kavyl</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            navOpen ? 'navLinks sideNavActive sideNavSpacer' : 'navLinks'
          }
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                {windowWidth < 768 ? (
                  link.subNavLinks.length > 0 ? (
                    <a
                      className='navLink pointer'
                      onClick={subNavOpeningHandler}
                      id={link.id}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.path}>
                      <a className='navLink' id={link.id}>
                        {link.name}
                      </a>
                    </Link>
                  )
                ) : (
                  <Link href={link.path}>
                    <a className='navLink' id={link.id}>
                      {link.name}
                    </a>
                  </Link>
                )}
                <ul className='subNav'>
                  {link.subNavLinks.map((subLink) => (
                    <li
                      key={subLink.name}
                      className={
                        windowWidth < 768
                          ? subNavLinksOpen[link.id - 1]
                            ? 'subNavLi subNavActive'
                            : 'subNavLi'
                          : 'subNavLi'
                      }
                    >
                      <Link href={{ pathname: subLink.path }}>
                        <a className='navLink'>{subLink.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className='burger-container'>
          <div className='burger' onClick={() => setNavOpen(!navOpen)}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
        <img
          src='https://res.cloudinary.com/tomastuser/image/upload/v1594803389/caraNav_zqzshh.png'
          alt='caraNav'
          className='caraNav'
        />
      </div>
      <div className='navSpacerAtTheTop'></div>
    </>
  );
}

export default Nav;
