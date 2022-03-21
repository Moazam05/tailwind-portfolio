import React from 'react';

import Layout from '../components/Layout';
import { projectsData } from '../resources/Projects';

const Projects = () => {
  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player
              src='https://assets1.lottiefiles.com/packages/lf20_ygiuluqn.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
          <p className='text-center text-xl font-semibold'>
            Good ideas are not adapted automatically. They must be driven into
            practice and courageous patience
          </p>
          <h1 className='text-center text-4xl font-bold mt-5'>Because</h1>
        </div>
        <div className='text-center font-semibold bg-secondary text-white mx-20 p-20 rounded-tl-full rounded-br-full md:mx-5'>
          <h1 className='text-8xl uppercase md:text-3xl'>The GAME Is...</h1>
          <h1 className='text-8xl uppercase md:text-3xl'>Consistency</h1>
        </div>
      </div>

      <div className='mt-20 grid md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5'>
        {projectsData.map((project, index) => {
          const { image, title } = project;
          return (
            <div key={index}>
              <div className='relative p-10 border-2 border-gray-400 text-center rounded-tr-3xl rounded-bl-3xl'>
                <img
                  src={image}
                  alt={title}
                  className='w-full h-72 text-center'
                />
                <div className='absolute inset-0 flex items-center justify-center rounded-tr-3xl rounded-bl-3xl flex-col opacity-0 bg-black hover:opacity-80'>
                  <div className='text-3xl font-semibold text-white'>
                    {title}
                  </div>
                  <button className='border-2 border-white rounded py-2 px-10 text-white font-medium hover:bg-green-500 mt-5'>
                    Demo
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
