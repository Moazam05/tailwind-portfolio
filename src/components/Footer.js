import React from 'react';
import {
  FaWhatsapp,
  FaSkype,
  FaLinkedin,
  FaGithub,
  FaMailBulk,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* <div className='h-80 sm:h-20 md:h-20'> */}
      <div className='h-80 sm:hidden md:hidden'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2a2a2a'
            fillOpacity='1'
            d='M0,224L0,192L205.7,192L205.7,224L411.4,224L411.4,288L617.1,288L617.1,96L822.9,96L822.9,160L1028.6,160L1028.6,64L1234.3,64L1234.3,192L1440,192L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z'
          ></path>
        </svg>
      </div>

      <div className='sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2a2a2a'
            fillOpacity='1'
            d='M0,288L0,192L288,192L288,96L576,96L576,224L864,224L864,32L1152,32L1152,128L1440,128L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z'
          ></path>
        </svg>
      </div>

      <div className='bg-theme w-screen flex justify-center'>
        <div className='md:w-full w-1/2'>
          <div className='p-10 font-mont text-center'>
            <div className='text-gray-50 pb-5'>Designed and Developed By</div>
            <div className='h-1 border-2 border-gray-50 border-dotted'></div>
            <div className='flex text-white w-full justify-between py-3'>
              <a
                href='https://wa.me/923134866442'
                target='_blank'
                rel='noreferrer'
              >
                <FaWhatsapp size={25} />
              </a>

              <a
                href='skype:<moazam05>?<action>'
                target='_blank'
                rel='noreferrer'
              >
                <FaSkype size={25} />
              </a>
              <a
                href='https://linkedin.com/in/moazam05'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href='mailto:salmanmoazam08@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <FaMailBulk size={25} />
              </a>
              <a
                href='https://github.com/Moazam05'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub size={25} />
              </a>
            </div>
            <div className='h-1 border-2 border-gray-50 border-dotted'></div>
            <div className='text-gray-50 pt-5'>Salman Moazam</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
