import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
