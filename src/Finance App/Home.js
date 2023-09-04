import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="container rounded-4 bg-primary text-center my-3 text-white w-75">
        <div className="p-4">
            <h1> $ Balance </h1>
            <p> Available Balance </p>
            <Link to={"./addbalance"}>
                <button className='btn btn-light text-primary'> Add Balance </button>
            </Link>    
        </div>   
        </div>

    {/* 0utPut  */}
    <div className="container w-75 my-5">
    <h2> Payment History </h2>
    <div className="bg-map rounded-4 my-3">
        <div className="p-3">
        <div className="float-end my-2">
            <button className='btn btn-sm btn-primary'> Buy Again </button> 
        </div>
        <div>
            <b> Name - $Balance </b> <br />
            <i> Date </i>
        </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Home