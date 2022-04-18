import React, { useEffect } from 'react';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import {
  SiRedux,
  SiMaterialui,
  SiTailwindcss,
  SiNextdotjs,
  SiGatsby,
  SiJavascript,
  SiPython,
} from 'react-icons/si';
import { DiSass, DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';

import Layout from '../components/Layout';

import AOS from 'aos';
AOS.init({
  duration: 1000,
});

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className='text-7xl md:text-4xl' data-aos='slide-right'>
                Hii, I am <b className='text-yellow-500'>Moazam</b>
              </div>

              <div className='text-4xl md:text-xl' data-aos='slide-left'>
                Frontend <b className='text-red-500'>Developer</b>, React JS
              </div>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className='mt-16'>
          <div
            className='text-blue-800 font-bold text-center text-4xl my-4 md:text-3xl sm:text-3xl'
            data-aos='slide-up'
          >
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
              color='#36454f'
              className='w-full text-center mt-20'
            />
            <SiGatsby
              size={150}
              color='#663399'
              className='w-full text-center mt-20 animate-bounce'
            />
            <AiFillHtml5
              size={150}
              color='#e44d26'
              className='w-full text-center mt-20'
            />
            <DiCss3
              size={150}
              color='#2c9bd4'
              className='w-full text-center mt-20 animate-bounce'
            />
            <SiJavascript
              size={150}
              color='#ffcd3a'
              className='w-full text-center mt-20 animate-bounce'
            />
            <SiPython
              size={150}
              color='#346c99'
              className='w-full text-center mt-20'
            />
          </div>
        </div>
        {/* JavaScript Buff */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='text-white font-bold text-4xl py-10'>
              Yes You Are Right... I am Javascript Buff
            </h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl rounded-lg bg-gray-50 -mt-20 hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player
                src='https://assets6.lottiefiles.com/packages/lf20_sSF6EG.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='text-xl font-semibold my-5 md:px-5 px-14 py-10'>
              Javascript is one of the most top-ranked programming languages
              because of its ubiquitous us on all platform and mass adoption.
              Main use cases: Web Development.
            </div>
          </div>
        </div>

        {/* Dev stack */}
        <div className='my-20'>
          <div className='text-center h-52 bg-secondary'>
            <h1 className='text-white font-bold text-4xl py-10'>
              My Dev Stack
            </h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl rounded-lg bg-gray-50 -mt-20 hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player
                src='https://assets4.lottiefiles.com/packages/lf20_aptscmnx.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='grid md:grid-cols-1 grid-cols-3 p-5'>
              <div>
                <h1 className='text-xl font-bold mb-1'>Frontend</h1>
                <hr />
                <div className='font-medium mt-2'>React</div>
                <div className='font-medium mt-2'>Redux</div>
                <div className='font-medium mt-2'>Redux Toolkit</div>
                <div className='font-medium mt-2'>Next JS</div>
                <div className='font-medium mt-2'>Gatsby JS</div>
              </div>

              <div className='text-center'>
                <h1 className='text-xl font-bold mb-1'>UI / UX</h1>
                <hr />
                <div className='font-medium mt-2'>Bootstrap</div>
                <div className='font-medium mt-2'>Material UI</div>
                <div className='font-medium mt-2'>Semantic UI</div>
                <div className='font-medium mt-2'>SASS</div>
                <div className='font-medium mt-2'>Tailwind</div>
                <h1 className='text-xl font-bold mt-3'>CMS</h1>
                <div className='font-medium mt-2'>Strapi</div>
              </div>

              <div className='text-right'>
                <h1 className='text-xl font-bold mb-1'>Languages</h1>
                <hr />
                <div className='font-medium mt-2'>HTML/CSS</div>
                <div className='font-medium mt-2'>JavaScript</div>
                <div className='font-medium mt-2'>Python</div>
                <h1 className='text-xl font-bold mt-3'>Database</h1>
                <div className='font-medium mt-2'>MYSQL</div>
                <div className='font-medium mt-2'>DBMS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div>
          <div className='text-4xl text-center text-gray-500 font-bold'>
            Who is Moazam ?
          </div>
          <div className='h-screen relative text-gray-800'>
            <div className='h-full'>
              <lottie-player
                src='https://assets5.lottiefiles.com/packages/lf20_gja1z1ru.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold'>
                Hey Hi, Hello...
                <hr />
                <pre className='text-xl md:text-sm font-mont'>
                  {JSON.stringify(
                    {
                      name: 'Moazam',
                      age: '🤨',
                      gender: 'Male',
                      country: 'Pakistan',
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
