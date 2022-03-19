import React from 'react';

import Layout from '../components/Layout';

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
    </Layout>
  );
};

export default Projects;
