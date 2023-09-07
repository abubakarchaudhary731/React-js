import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Home';
import AddBalance from './AddBalance';
import Detail from './Detail';
import Error from './Error';

const  Main = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addbalance" element={<AddBalance />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='*' element={<Error />} /> 
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main