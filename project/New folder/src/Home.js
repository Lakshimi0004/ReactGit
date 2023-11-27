import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { CartProvider } from './Components/CartContext';

const Home = ({ children }) => {
  return (
    <div>
      <CartProvider>
      <Navbar />
      </CartProvider>
      <main>
    
        {children}
       
      </main>
      <Footer />
    </div>
  );
};

export default Home;