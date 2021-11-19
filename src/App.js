import React, { useState } from 'react';

import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/home/home';
import Other from "./components/other /other"
import Login from './components/login/login';
import Navbar from './components/nav/navigation';


function App() {
  const [isLoggin, setLoggin] = useState(false)

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <div className="row col-12 d-flex justify-content-center text-white">
            <ul className="navbarItem">
              <Navbar login={isLoggin}/>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/other" element={<Other/>} />
        <Route path="/login" element={<Login loginHandler={setLoggin} />} />
      </Routes>
    </>
  );
}

export default App;
