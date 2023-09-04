import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Home';
import AddBalance from './AddBalance';

const  Main = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addbalance" element={<AddBalance />} />
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main