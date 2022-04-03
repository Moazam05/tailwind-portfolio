import React, { useEffect } from 'react';

import Layout from '../components/Layout';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player
              src='https://assets4.lottiefiles.com/packages/lf20_isbiybfh.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div className='w-screen flex justify-center'>
          <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
            <div className='text-2xl font-semibold'>
              Contact me to know more
            </div>
            <input
              type='text'
              className='w-full border-2 border-gray-400 rounded mt-5 p-1 shadow-lg'
              placeholder='Name'
              name='name'
              id='name'
            />
            <input
              type='text'
              className='w-full border-2 border-gray-400 rounded mt-5 p-1 shadow-lg'
              placeholder='Email'
              name='email'
              id='email'
            />
            <textarea
              rows={3}
              type='text'
              className='w-full border-2 border-gray-400 rounded mt-5 p-1 shadow-lg'
              placeholder='Query'
              name='query'
              id='query'
            />

            <button className='bg-primary text-white py-1 px-5 rounded uppercase mt-3'>
              submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
