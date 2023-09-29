'use client';
import { useState } from 'react';
import { MdPerson, MdSearch, MdMenu, MdClose } from 'react-icons/md';

import './Navbar.css';
import BingewiseLogo from '../BingewiseLogo/BingewiseLogo';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className='container navbar-wrapper'>
        <div>
          <Link href={'/'}>
            <BingewiseLogo />
          </Link>
        </div>

        <div className='mobile-menu'>
          <div
            className={`hamburger-lines ${showMenu ? 'clicked' : ''}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>

          <div
            className={`mobile-menu-container ${showMenu ? 'slide-in' : ''}`}
          >
            <nav>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/listing?type=movies'}>Movies</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/listing?type=tvshows'}>TV Shows</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/listing?type=people'}>People</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/profile'}>Profile</Link>
              </li>
            </nav>
          </div>
        </div>

        <div className='menu-container'>
          <nav className='menu'>
            <ul>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/listing?type=movies'}>Movies</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/listing?type=tvshows'}>TV Shows</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link href={'/listing?type=people'}>People</Link>
              </li>
              <li className='icon-btn' onClick={() => setShowMenu(false)}>
                <Link href={'/profile'}></Link>
              </li>
              <li>
                <button className='btn-primary'>Sign In</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
