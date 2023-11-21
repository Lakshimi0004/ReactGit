import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Account';

const Home = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Home;