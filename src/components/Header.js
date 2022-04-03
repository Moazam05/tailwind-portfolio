import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [showMenu, setShowMenu] = useState('md:hidden');

  const menuItems = [
    {
      title: 'Home',
      key: '/',
    },
    {
      title: 'Projects',
      key: '/projects',
    },
    {
      title: 'Courses',
      key: '/courses',
    },
    {
      title: 'Contact',
      key: '/contact',
    },
  ];

  const pathName = window.location.pathname;

  return (
    <React.Fragment>
      <div className='text-white font-mont fixed top-0 left-0 right-0 z-50'>
        <div
          className={`flex bg-theme justify-between items-center p-4 shadow-lg ${
            showMenu == '' && 'md:flex-col'
          }`}
        >
          <div className='flex justify-between items-center w-full'>
            <Link to='/'>
              <h1 className='text-3xl  font-semibol hover:text-yellow-500'>
                Moazam
              </h1>
            </Link>
            <FaBars
              onClick={() => {
                if (showMenu == 'md:hidden') {
                  setShowMenu('');
                } else {
                  setShowMenu('md:hidden');
                }
              }}
              className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer'
            />
          </div>
          <div className='flex md:hidden'>
            {menuItems.map((item, index) => {
              const { title, key } = item;
              return (
                <li
                  key={index}
                  className={`list-none mx-5 py-1 px-5 ${
                    pathName == key && 'bg-white text-black rounded'
                  }`}
                >
                  <Link to={key}>{title}</Link>
                </li>
              );
            })}
          </div>
          {/* mobile */}
          <div
            className={`md:flex mt-3 flex-col items-start w-full lg:hidden xl:hidden 2xl:hidden ${showMenu}`}
          >
            {menuItems.map((item, index) => {
              const { title, key } = item;
              return (
                <li
                  key={index}
                  className={`list-none my-2 py-1 ${
                    pathName == key && 'bg-white text-black rounded  px-3'
                  }`}
                >
                  <Link to={key}>{title}</Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
