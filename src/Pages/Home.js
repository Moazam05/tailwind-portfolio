import React from 'react';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div>
        <div className='h-screen bg-theme'>
          <div className='grid grid-cols-2 md:grid-cols-1 h-screen items-center mx-10 z-10 bg-theme border-4 border-white transform rotate-12 md:rotate-0 md:border-0 md:mx-0'>
            <div className='h-1/2'>
              <lottie-player
                src='https://assets9.lottiefiles.com/packages/lf20_kyu7xb1v.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className='font-bold text-white md:px-5'>
              <div className='text-7xl md:text-4xl'>
                Hii, I am <b className='text-yellow-500'>Moazam</b>
              </div>

              <div className='text-4xl md:text-xl'>
                Frontend <b className='text-red-500'>Developer</b>, React JS
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
