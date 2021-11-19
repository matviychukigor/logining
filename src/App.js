import React, { useState } from 'react';

import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/home/home';
import Other from "./components/other /other"
import Login from './components/login/login';
import Navbar from './components/nav/navigation';


function App() {
  const [isLoggin, setLoggin] = useState(false)

  console.log(isLoggin);

  if(isLoggin){
    return <Login loginHandler={setLoggin}/>
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-primary">
          <div className="row col-12 d-flex justify-content-center text-white">
            <ul className="navbarItem">
              <Navbar login={setLoggin}/>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/other" element={<Other/>} />
      </Routes>
    </>
  );
}

export default App;
