import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context';

const Home = () => {
    const {data , balance, addAgain} = GlobalContext();
    
   

  return (
    <div>
        <div className="container rounded-4 bg-primary text-center my-3 text-white w-75">
        <div className="p-4">
            <h1> ${balance} </h1>
            <p> Available Balance </p>
            <Link to={"./addbalance"}>
                <button className='btn btn-light text-primary'> Add Balance </button>
            </Link>    
        </div>   
        </div>

    {/* 0utPut  */}
    <div className="container w-75 my-5">
    <h2> Payment History </h2>
    {
    data.map((item , index) =>{
        return(
        <div className="bg-map rounded-4 my-3" key={index}>
        <div className="p-3">
        <div className="float-end my-2">
            <button className='btn btn-sm btn-primary' onClick={() => addAgain(index)}> Add Again </button> 
        </div>
        <div>
            <b> {item.name} - ${item.amount} </b> <br />
            <i> <small> {item.time} </small> </i>
        </div>
        </div>
        </div>
        )})
    }

    </div>
    </div>
  )
}

export default Home