import React, { useEffect } from 'react';

import Layout from '../components/Layout';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        <div>
          <div className='h-screen relative'>
            <div className='h-3/4 bg-theme pt-20'>
              <lottie-player
                src='https://assets7.lottiefiles.com/packages/lf20_z01bika0.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='absolute left-0 right-0'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='#2a2a2a'
                  fill-opacity='1'
                  d='M0,128L48,144C96,160,192,192,288,170.7C384,149,480,75,576,85.3C672,96,768,192,864,197.3C960,203,1056,117,1152,90.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 md:mt-5'>
        <p className='text-center text-xl font-semibold md:px-2 sm:px-2'>
          "I can't teach people everything they need to knoe. The best I can do
          position them where they can find what they need to know when they
          need to know."
        </p>
        <h1
          className='text-center text-4xl font-bold mt-5 sm:text-3xl md:mb-3 sm:mb-3'
          data-aos='slide-up'
        >
          Because
        </h1>
      </div>
      <div className='mt-20 md:mt-5'>
        <div className='text-center font-semibold bg-gray-500 text-white mx-20 p-20 rounded-tl-full rounded-br-full md:mx-5'>
          <h1 className='text-8xl uppercase sm:text-xl' data-aos='slide-down'>
            learning Is...
          </h1>
          <h1 className='text-8xl uppercase sm:text-xl' data-aos='slide-up'>
            continuous
          </h1>
        </div>
      </div>

      <div>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player
              src='https://assets4.lottiefiles.com/packages/lf20_mcyr8uol.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
