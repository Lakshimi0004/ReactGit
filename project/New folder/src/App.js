import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Home';
import Signup from './Components/Signup';

const App = () => {
  return (
   <div>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    
    </div>
  );
};

export default App;