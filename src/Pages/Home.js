import React from 'react';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import {
  SiRedux,
  SiMaterialui,
  SiTailwindcss,
  SiNextdotjs,
  SiGatsby,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div>
        {/* Intro Section */}
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
        {/* Technologies */}
        <div className='mt-16'>
          <div className='text-blue-800 font-bold text-center text-4xl my-4'>
            Technologies i USE
          </div>
          <div className='grid md:grid-cols-1 grid-cols-4'>
            <FaReact
              size={150}
              color='#61dbfb'
              className='w-full text-center mt-20'
            />
            <SiRedux
              size={150}
              color='#764abc'
              className='w-full text-center mt-20 animate-bounce'
            />
            <SiMaterialui
              size={150}
              color='#00b0ff'
              className='w-full text-center mt-20 animate-bounce'
            />
            <FaBootstrap
              size={150}
              color='#860afb'
              className='w-full text-center mt-20'
            />
            <DiSass
              size={150}
              color='#ce679a'
              className='w-full text-center mt-20 animate-bounce'
            />
            <SiTailwindcss
              size={150}
              color='#38bdf8'
              className='w-full text-center mt-20'
            />
            <SiNextdotjs
              size={150}
              color='#000'
              className='w-full text-center mt-20'
            />
            <SiGatsby
              size={150}
              color='#663399'
              className='w-full text-center mt-20 animate-bounce'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
